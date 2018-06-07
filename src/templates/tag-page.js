import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

function TagPage(props) {
  const posts = props.data.allMarkdownRemark.edges
  const title = props.data.site.siteMetadata.title
  const postLinks = posts.map(post => {
    return (
      <li key={post.node.id}>
        <Link to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    )
  })
  return (
    <div>
      <Helmet title={title} />
      <h2>
        {props.data.allMarkdownRemark.totalCount} posts tagged with “{
          props.pathContext.tag
        }”
      </h2>
      <ul>{postLinks}</ul>
      <p>
        <Link to="/tags/">Browse all tags</Link>
      </p>
    </div>
  )
}

export default TagPage

export const pageQuery = graphql`
  query TagQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
