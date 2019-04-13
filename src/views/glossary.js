
/*!
 * Dependencies
 */

const React = require('react')
const { NavLink } = require('react-router-dom')
const glossary = require('../data/glossary')

/**
 * Home sub-view
 */

class Glossary extends React.Component {
  render() {
    return (
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <h5>Glossary</h5>
          </div>
          {glossary.map(term => (
            <div key={term.word}>
              <a id={term.word}>{term.word}</a>
              <p>{term.definition}</p>
              <span>{term.reference}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

/*!
 * Exports
 */

module.exports = Glossary
