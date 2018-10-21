
/*!
 * Dependencies
 */

const React = require('react')
const { NavLink } = require('react-router-dom')

/**
 * Home sub-view
 */

class Dashboard extends React.Component {

  render() {
    return (
      <div id="route-summary" className="section">
        <h1 className="section-title">Dashboard</h1>
        <div className="section-content">
          <NavLink
            to={`/search`}
            className="menu-item"
            activeClassName="active"
            >
            <span className="route-path">Search</span>
          </NavLink>
        </div>
      </div>
    )
  }
}

/*!
 * Exports
 */

module.exports = Dashboard
