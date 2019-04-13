/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-deprecated */

/*!
 * Dependencies
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import reactStringReplace from 'react-string-replace'
import _ from 'underscore'
import { debug as _debug } from 'debug'
import './search.css'
import questions from '../data/questions'
import glossary from '../data/glossary'
import pictures from '../data/pictures'

const debug = _debug('views:search')

const glossaryMap = _.indexBy(glossary, 'word')

const pictureMap = {}
pictures.forEach(pic => {
  const word = pic.filename.replace(/_/g, ' ')
  pictureMap[word] = pic
})

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
      const obj = (active.items || []).find(x => x.key === key)

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
        path: base.join('/'),
      }
    })
  }

  getLinks() {
    const { active } = this.state.data
    const { items } = active || {}

    if (!items) return null

    return items.map(item => {
      let title = item.title

      for (const def of glossary) {
        const word = def.word
        const regex = new RegExp(word, 'ig')

        title = title.replace(regex, <a href={`/glossary/#${word}`}>{word}</a>)
      }

      return {
        ...item,
        title,
      }
    })
  }

  renderTitle(title) {
    for (const def of glossary) {
      const word = def.word
      const regex = new RegExp(word, 'i')

      title = reactStringReplace(title, regex, (match, i) => {
        return (
          <React.Fragment key={`${word}-${i}`}>
            <a href={`/glossary/#${word}`}>{word}</a>
            <span>{match}</span>
          </React.Fragment>
        )
      })
    }
    return title
  }

  getPictures(item) {
    const { title } = item
    const found = []

    for (const pic of pictures) {
      const name = pic.filename
        .replace(/_/g, ' ')
        .replace('.jpg', '')
        .replace('.png', '')

      const regex = new RegExp(name, 'i')
      if (title.match(regex)) found.push(pic)
    }
    return found
  }

  renderPictures(item) {
    const pics = this.getPictures(item)

    return (
      <React.Fragment>
        {pics.map(pic =>
          <img
            key={pic.filename}
            src={process.env.PUBLIC_URL + `/img/${pic.filename}`}
            height={200}
          />
        )}
      </React.Fragment>
    )
  }

  getActive() {
    const active = this.state.data.active || {}
    const items = this.getLinks()

    return {
      ...active,
      items,
    }
  }

  render() {
    const { active, history } = this.state.data

    // const active = this.getActive()
    const { items } = active || {}
    const crumbs = this.getBreadcrumbs(history)
    const defaultPrompt = 'Choose one of the following'

    let baseRoute = history.map(h => h.key).join('/')
    if (baseRoute) baseRoute += '/'

    return (
      <section id="search">
        {crumbs.length
          ? null
          : <nav id="breadcrumbs" className="grey lighten-1">
            <div className="nav-wrapper container">
              <div className="col s12">
                <NavLink
                  to={'/search'}
                  className="breadcrumb"
                  activeClassName="active"
                  key={'crumb-search'}
                >
                  Search
                </NavLink>
                {crumbs.map(crumb =>
                  <NavLink
                    to={`/search/${crumb.path}`}
                    className="breadcrumb"
                    activeClassName="active"
                    key={`crumb-${crumb.key}`}
                  >
                    {crumb.key}
                  </NavLink>
                )}
              </div>
            </div>
          </nav>
        }

        <div className="container">

          {active.answer
            && <div className="question-answer">
              <h4>Answer: {active.answer}</h4>
              <p>{active.summary}</p>
            </div>
          }

          {active.answer
            ? null
            : <div className="row">
              <div className="col s12">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">{active.prompt || defaultPrompt}</span>
                    {active.text && <p>{active.text}</p>}
                  </div>
                  <div className="card-action">
                    {items && items.map(item =>
                      <div className="collection" key={`question-${item.key}`}>
                        <p>{this.renderTitle(item.title)}</p>
                        <p>{this.renderPictures(item)}</p>

                        <NavLink
                          to={`/search/${baseRoute}${item.key}`}
                          className="col s12 green darken-2 waves-effect waves-light btn-large"
                          activeClassName="active"
                        >
                          Choose
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    )
  }
}

/*!
 * Exports
 */

export default Settings
