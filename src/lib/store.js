/* eslint-env node, browser */

/*!
 * Dependencies
 */

const varType = require('var-type')
const tryJSON = require('try-json')
const debug = require('debug')('lib:utils')

/**
 * Local Storage helper
 */

class Store {
  get(key) {
    debug('[get] key=`%s`', key)

    let val = localStorage.getItem(key)
    return tryJSON(val) || val
  }

  set(key, val) {
    debug('[set] key=`%s` val=`%j`', key, val)

    let tmp = val
    if (varType(val, 'Object', 'Array')) {
      tmp = JSON.stringify(val)
    }
    return localStorage.setItem(key, tmp)
  }

  del(key) {
    debug('[del] key=`%s`', key)

    return localStorage.removeItem(key)
  }
}

/*!
 * Exports
 */

module.exports =  new Store()
