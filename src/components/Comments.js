import React from 'react'

import { rhythm } from '../utils/typography'

class Comments extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(1),
        }}
      >
        I turned off Disqus comments. If you want to give me feedback please
        write to krzysztofzuraw(at)fastmail.com or use{' '}
        <a href="https://keybase.io/encrypt#krzysztofzuraw">Keybase</a>.
      </p>
    )
  }
}

export default Comments
