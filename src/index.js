/* eslint-env node, browser */

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./app')

window.App = ReactDOM.render(<App />, document.getElementById('body'))
