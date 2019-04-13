
/*!
 * Dependencies
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import glossary from '../data/glossary'
import './glossary.css'

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
            <div className="term-wrapper" key={term.word}>
              <NavLink id={term.word} to={`#${term.word}`}>{term.word}</NavLink>
              <blockquote>{term.definition}</blockquote>
              <span className="term-source">Source: {term.reference}</span>
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
