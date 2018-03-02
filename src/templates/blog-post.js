import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Comments from '../components/Comments'
import BlogSeries from '../components/BlogSeries'
import Newsletter from '../components/Newsletter'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  renderTags() {
    const tagsArray = this.props.data.markdownRemark.frontmatter.tags.map(
      (tag, index) => {
        return (
          <span key={tag}>
            <Link to={`/tags/${tag}`}>
              {this.props.data.markdownRemark.frontmatter.tags[index]}
            </Link>{' '}
          </span>
        )
      }
    )
    return (
      <em
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
        }}
      >
        Tagged with {tagsArray}
      </em>
    )
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {this.renderTags()}
        <BlogSeries
          readNext={this.props.data.markdownRemark.frontmatter.readNext}
          readPrev={this.props.data.markdownRemark.frontmatter.readPrev}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Newsletter />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Comments />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        readNext
        readPrev
      }
    }
  }
`
