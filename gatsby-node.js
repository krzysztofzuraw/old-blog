const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const tagPages = path.resolve('./src/templates/tag-page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    slug
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.slug,
            component: blogPost,
            context: {
              slug: edge.node.frontmatter.slug,
            },
          })
        })

        // Create tag pages.
        let tags = []
        _.each(result.data.allMarkdownRemark.edges, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)
        tags.forEach(tag => {
          createPage({
            path: `/tags/${tag}/`,
            component: tagPages,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}
