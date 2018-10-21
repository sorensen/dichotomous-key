
/*!
 * Dependencies
 */

const React = require('react')
const { Route, Redirect, BrowserRouter, NavLink, Link } = require('react-router-dom')
const _ = require('underscore')
const debug = require('debug')('app')

const Dashboard = require('./views/dashboard')
const Search = require('./views/search')

// CSS imports
require('./app.css')
require('materialize-css/dist/css/materialize.css')

// require('./app.css')

/**
 * Primary app wrapper, handles authentication and toggles login overlay with
 * the actual app / layout views. All globals / sharables should be created here
 * and passed down to any child component that needs them.
 *
 */

class App extends React.Component {

  constructor(props) {
    super(props)

    _.bindAll(this
    , 'loading'
    )
    this.state = {}
  }

  loading(active) {
    return new Promise(res => {
      this.setState({
        loading: !!active
      }, () => {
        if (!active) return res()

        // If activating, wait before resolving so the user can see progress
        setTimeout(res, 400)
      })
    })
  }

  render() {
    debug('[App.render] state=`%j`', this.state)

    return (
      <BrowserRouter>
        <Route path="/" render={(
          <div>
            <nav id="header" className="" key="header">
              <div className="nav-wrapper">
                <NavLink to={`/`} id="branding-text" className="brand-logo left">Bug Finder</NavLink>

                <ul id="nav-mobile" className="right hide-on-small-and-down">
                  <li><Link to="/search"><i className="material-icons left">search</i>Search</Link></li>
                  <li><Link to="/glossary"><i className="material-icons left">import_contacts</i>Glossary</Link></li>
                  <li><Link to="/about"><i className="material-icons left">info</i>About</Link></li>
                </ul>
              </div>
            </nav>

            <main id="main">
              <div id="content">
                <Route path="/" exact={true} component={Dashboard} />

                <Route path="/search/:a?/:b?/:c?/:d?/:e?/:f?/:g?/:h?/:i?/:j?/:k?/:l?/:m?/:n?/:o?/:p?/:q?/:r?/:s?/:t?/:u?/:v?/:w?/:x?/:y?/:z?" render={props => (
                  <Search
                    {...props}
                    sdk={this.props.sdk}
                    loading={this.props.loading}
                    alert={this.showAlert}
                    dialog={this.showDialog}
                  />
                )} />
              </div>
            </main>

            <footer className="page-footer">
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
                © 2018 Copyright Liz Sorensen
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
          </div>
        )} />
      </BrowserRouter>
    )
  }
}

/*!
 * Exports
 */

module.exports = App
