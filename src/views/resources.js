
/*!
 * Dependencies
 */

import React from 'react'

/**
 * Home sub-view
 */

class Resources extends React.Component {
  render() {
    return (
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <h3>Resources</h3>
          </div>
          <div className="row">
            <p>
              Here you will find links to pictures of insects
              that may help you figure out the family, genus,
              or species you have.
            </p>
            <p>
              Bug Guide
              <br /><a href="https://bugguide.net">https://bugguide.net</a>
            </p>
            <p>
              Amateur Entomologist’s Society
              <br /><a href="https://www.amentsoc.org">https://www.amentsoc.org</a>
            </p>
            <p>
              Insect Images
              <br /><a href="https://www.insectimages.org">https://www.insectimages.org</a>
            </p>
            <p>
              Encyclopedia of Life
              <br /><a href="https://eol.org">https://eol.org</a>
            </p>
            <p>
              Wikipedia
              <br /><a href="https://www.wikipedia.org">https://www.wikipedia.org</a>
            </p>
            <p>
              JungleDragon
              <br /><a href="https://www.jungledragon.com">https://www.jungledragon.com</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

/*!
 * Exports
 */

export default Resources
