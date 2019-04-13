
/*!
 * Dependencies
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import glossary from '../data/glossary'

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

export default Glossary
