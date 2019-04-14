
/*!
 * Dependencies
 */

import React from 'react'
import { Route, HashRouter, NavLink, Link } from 'react-router-dom'
import { debug as _debug } from 'debug'
import Home from './views/home'
import Glossary from './views/glossary'
import Search from './views/search'
import Equipment from './views/equipment'
import Resources from './views/resources'

/*!
 * Styles
 */

import 'materialize-css/dist/css/materialize.css'
import './app.css'

const debug = _debug('app')

/**
 *
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    debug('[App.render] state=`%j`', this.state)

    const navIconStyle = 'material-icons left light-green-text text-darken-4'

    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={() => (
          <React.Fragment>
            <header>
              <nav className="light-green">
                <div className="nav-wrapper container">
                  <NavLink to={'/'} id="branding-text" className="brand-logo">
                    <i className="logo-icon material-icons light-green-text text-darken-4">bug_report</i>
                    <span className="logo-text hide-on-small-and-down">What's Bugging You?</span>
                  </NavLink>

                  <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><Link to="/search"><i className={navIconStyle}>play_circle_filled</i>Start</Link></li>
                    <li><Link to="/glossary">Glossary</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/equipment">Equipment</Link></li>
                  </ul>
                </div>
              </nav>

              <ul className="sidenav" id="mobile-nav">
                <li><Link to="/"><i className={navIconStyle}>bug_report</i>Home</Link></li>
                <li><Link to="/search"><i className={navIconStyle}>play_circle_filled</i>Start</Link></li>
                <li><Link to="/glossary"><i className={navIconStyle}>import_contacts</i>Glossary</Link></li>
                <li><Link to="/resources"><i className={navIconStyle}>info</i>Resources</Link></li>
                <li><Link to="/equipment"><i className={navIconStyle}>build</i>Equipment</Link></li>
              </ul>
            </header>

            <main id="main">
              <Route path="/" exact={true} component={Home} />
              <Route path="/glossary" exact={false} component={Glossary} />
              <Route path="/resources" exact={true} component={Resources} />
              <Route path="/equipment" exact={true} component={Equipment} />

              <Route
                path="/search/:a?/:b?/:c?/:d?/:e?/:f?/:g?/:h?/:i?/:j?/:k?/:l?/:m?/:n?/:o?/:p?/:q?/:r?/:s?/:t?/:u?/:v?/:w?/:x?/:y?/:z?"
                component={Search}
              />
            </main>

            <footer className="page-footer light-green">
              <div className="container hidden">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                  © 2019 Copyright Liz Sorensen
                  <a className="hidden grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
          </React.Fragment>
        )} />
      </HashRouter>
    )
  }
}

/*!
 * Exports
 */

export default App
