import React from 'react'

import '../styles/base.scss'

function Layout({ children }) {
  return (
    <div>
      {children}

      <footer>
        Made by {' '}
        <a href="https://twitter.com/telmo" target="_blank">
          Telmo Goncalves
        </a> {' '}
        with {' '}
        <a href="https://nextjs.org/" target="_blank">
          NextJS
        </a> {' '}
        &copy; {new Date().getFullYear()}

        <br />

        Check the <a href="https://github.com/uvacoder/happened.tech" target="_blank">source code</a>. {' '}
        Add your own story.

        <br />

        Hosted on <a href="http://zeit.co/" target="_blank">Zeit</a>.
      </footer>
    </div>
  )
}

export default Layout
