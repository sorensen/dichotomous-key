
/*!
 * Dependencies
 */

import React from 'react'

/**
 * Home sub-view
 */

class Equipment extends React.Component {
  render() {
    return (
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <h3>Equipment</h3>
          </div>
          <div className="row">
            <p>
              Here you will find links to places where you can
              buy equipment for inspecting and/or collecting insects.
            </p>
            <p>
              BioQuip: everything you need to start collecting insects, including information on how to collect insects!
              <br /><a href="https://www.bioquip.com">https://www.bioquip.com</a>
            </p>
            <p>
              How To Start an Insect Collection:
              <br /><a href="https://bugguide.net/node/view/36900">https://bugguide.net/node/view/36900</a>
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

export default Equipment
