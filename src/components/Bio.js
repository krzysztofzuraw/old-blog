import React from 'react'
import Link from 'gatsby-link'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Krzysztof Żuraw`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(50),
          }}
        />
        Delivered by{' '}
        <strong>
          <Link style={{ boxShadow: 'none' }} to={'/about'}>
            Krzysztof Żuraw
          </Link>
        </strong>. Opinions are my own. You can follow updates via{' '}
        <Link style={{ boxShadow: 'none' }} to={'/rss.xml'} target="_blank">
          RSS feed
        </Link>{' '}
        or{' '}
        <Link style={{ boxShadow: 'none' }} to={'/newsletter'}>
          monthly email newsletter
        </Link>
      </p>
    )
  }
}

export default Bio
