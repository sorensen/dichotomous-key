
/*!
 * Dependencies
 */

const React = require('react')
const { NavLink } = require('react-router-dom')

/*!
 * Link component
 */

class Link extends React.Component {
  render() {
    return (
      <NavLink
        to={this.props.to}
        exact={this.props.exact}
        activeClassName="active"
        title={this.props.title}
        className={this.props.className || 'menu-item'}
      >
        {this.props.icon && (
          <i className={`fa fa-${this.props.icon}`} />
        )}
        <span>{this.props.title}</span>
      </NavLink>
    )
  }
}

/*!
 * Exports
 */

module.exports = Link
