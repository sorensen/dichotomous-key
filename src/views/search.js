/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-deprecated */

/*!
 * Dependencies
 */

const React = require('react')
const { NavLink } = require('react-router-dom')
const _ = require('underscore')
const debug = require('debug')('views:search')
const questions = require('../questions.json')

require('./search.css')

/**
 * Home sub-view
 */

class Settings extends React.Component {

  constructor(props) {
    super(props)

    const data = this.getQuestionTree(props.match.params)

    this.state = {
      data,
    }
  }

  getQuestionTree(params) {
    const keys = _.compact(Object.values(params))
    const history = []
    let active = questions

    for (const key of keys) {
      const obj = (active.questions || []).find(x => x.key === key)

      if (!obj) break // TODO: 404 / redirect

      history.push(obj)
      active = obj
    }
    return { history, active }
  }

  componentWillReceiveProps(nextProps) {
    const data = this.getQuestionTree(nextProps.match.params)

    debug('[componentWillReceiveProps] active=`%s`', nextProps)

    this.setState({
      data,
    })
  }

  getBreadcrumbs(history) {
    const base = []

    return history.map(h => {
      base.push(h.key)

      return {
        key: h.key,
        path: base.join('/')
      }
    })
  }

  render() {
    const { active, history } = this.state.data
    const { questions } = active || {}
    const crumbs = this.getBreadcrumbs(history)

    let baseRoute = history.map(h => h.key).join('/')
    if (baseRoute) baseRoute += '/'

    return (
      <div id="settings-wrapper" className="flex">
        <nav id="breadcrumbs">
          <div className="nav-wrapper">
            <div className="col s12">
              {crumbs.map(crumb => (
                <NavLink
                  to={`/search/${crumb.path}`}
                  className="breadcrumb"
                  activeClassName="active"
                  key={`crumb-${crumb.key}`}
                  >
                  {crumb.key}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="container">
          <h3 className="question-title">{active.prompt}</h3>

          {active.answer &&
            <div className="question-answer">
              Answer: {active.answer}
            </div>
          }

          {questions &&
            <div className="collection">
              {questions.map(question => (
                <NavLink
                  to={`/search/${baseRoute}${question.key}`}
                  key={`question-${question.key}`}
                  className="collection-item waves-effect waves-light btn-large"
                  activeClassName="active"
                  >
                  {question.title}
                </NavLink>
              ))}
            </div>
          }
        </div>
      </div>
    )
  }
}

/*!
 * Exports
 */

module.exports = Settings
