/* eslint-env node, browser */

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./app')

document.addEventListener('DOMContentLoaded', () => {
  window.M.AutoInit()
})
window.App = ReactDOM.render(<App />, document.getElementById('body'))
