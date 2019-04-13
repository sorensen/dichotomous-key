
/*!
 * Dependencies
 */

import React from 'react'
import { Route, BrowserRouter, NavLink, Link } from 'react-router-dom'
import { debug as _debug } from 'debug'
import Home from './views/home'
import Glossary from './views/glossary'
import Search from './views/search'

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

    // '/dichotomous-key'
    console.log('public url: ', process.env.PUBLIC_URL)
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={() => (
          <React.Fragment>
            <header>
              <nav className="grey lighten-5">
                <div className="nav-wrapper">
                  <NavLink to={'/'} id="branding-text" className="brand-logo grey-text text-darken-3">
                    <i className="material-icons">bug_report</i>Bugs
                  </NavLink>

                  <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><Link to="/search" className="grey-text text-darken-2"><i className="material-icons left">search</i>Search</Link></li>
                    <li><Link to="/glossary" className="grey-text text-darken-2"><i className="material-icons left">import_contacts</i>Glossary</Link></li>
                    <li><Link to="/about" className="grey-text text-darken-2"><i className="material-icons left">info</i>About</Link></li>
                  </ul>
                </div>
              </nav>

              <ul className="sidenav" id="mobile-nav">
                <li><Link to="/search" className="grey-text text-darken-2"><i className="material-icons left">search</i>Search</Link></li>
                <li><Link to="/glossary" className="grey-text text-darken-2"><i className="material-icons left">import_contacts</i>Glossary</Link></li>
                <li><Link to="/about" className="grey-text text-darken-2"><i className="material-icons left">info</i>About</Link></li>
              </ul>
            </header>

            <main id="main">
              <Route path="/" exact={true} component={Home} />
              <Route path="/glossary" exact={false} component={Glossary} />

              <Route
                path="/search/:a?/:b?/:c?/:d?/:e?/:f?/:g?/:h?/:i?/:j?/:k?/:l?/:m?/:n?/:o?/:p?/:q?/:r?/:s?/:t?/:u?/:v?/:w?/:x?/:y?/:z?"
                component={Search}
              />
            </main>

            <footer className="page-footer light-green">
              <div className="container">
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
                  <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
          </React.Fragment>
        )} />
      </BrowserRouter>
    )
  }
}

/*!
 * Exports
 */

export default App
