import React from 'react'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

const Newsletter = () => (
  <div>
    <Helmet title={'Newsletter'} />
    <h1>Monthly newsletter</h1>
    <div>
      If you want to have my blog posts in one bulk form - sign in to my monthly
      newsletter! I will be sending you all blog posts from given month in one
      mail. Use from below to sign in.
    </div>
    <div>
      <form
        action="https://krzysztofzuraw.us16.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="948fccf3acaf863f70622c7b9" />
        <input type="hidden" name="id" value="d7341a01b4" />
        <input type="hidden" name="orig-lang" value="1" />
        <input
          type="email"
          autocapitalize="off"
          autocorrect="off"
          name="MERGE0"
          id="MERGE0"
          size="25"
          value=""
        />
        <input
          type="submit"
          class="formEmailButton"
          name="submit"
          value="Subscribe to list"
        />
      </form>
    </div>
  </div>
)

export default Newsletter
