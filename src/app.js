
/*!
 * Dependencies
 */

const React = require('react')
const { Route, BrowserRouter, NavLink, Link } = require('react-router-dom')
const debug = require('debug')('app')
const Home = require('./views/home')
const Glossary = require('./views/glossary')
const Search = require('./views/search')

/*!
 * Styles
 */

require('materialize-css/dist/css/materialize.css')
require('./app.css')

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

    return (
      <BrowserRouter>
        <Route path="/" render={() => (
          <React.Fragment>
            <header>
              <nav>
                <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">Logo</a>
                  <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                  </ul>
                </div>
              </nav>

              <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
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

module.exports = App
