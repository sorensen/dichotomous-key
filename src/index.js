/* eslint-env node, browser */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
  window.M.AutoInit()
})
ReactDOM.render(<App />, document.getElementById('body'))
