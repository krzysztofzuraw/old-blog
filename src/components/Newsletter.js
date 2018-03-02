import React from 'react'

import { rhythm } from '../utils/typography'

const Newsletter = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>Want a monthly digest of these blog posts?</span>
    <form
      action="https://krzysztofzuraw.us16.list-manage.com/subscribe/post"
      method="POST"
    >
      <input type="hidden" name="u" value="948fccf3acaf863f70622c7b9" />
      <input type="hidden" name="id" value="d7341a01b4" />
      <input type="hidden" name="orig-lang" value="1" />
      <input
        type="email"
        autoCapitalize="off"
        autoCorrect="off"
        name="MERGE0"
        id="MERGE0"
        size="25"
        placeholder="Your email address"
      />
      <input
        type="submit"
        className="formEmailButton"
        name="submit"
        value="Subscribe"
      />
    </form>
  </div>
)

export default Newsletter
