
/*!
 * Dependencies
 */

const React = require('react')
const { NavLink } = require('react-router-dom')

/**
 * Home sub-view
 */

class Home extends React.Component {
  render() {
    return (
      <section id="dashboard">
        <div className="container">
          <h3>Welcome to “What’s Bugging You?”</h3>
          <p>
            This is a dichotomous key meant to help you identify the Order of the insect you’ve found.
            Each page will present you with 2 choices. Pick the one that matches your bug the best.
            If you pick the one you think is right, but the next one doesn’t seem right, that’s okay!
            Just go back and try again.
          </p>
          <p>
            Along the way there will be help. Any words that are __COLOR__ will give you a definition to
            explain what that word means. Other words that are __COLOR__ will provide a picture to give
            you a better idea of what you are supposed to be seeing. These pictures may have multiple
            descriptions from the key, and sometimes will tell you what the bug is, so click on them
            as often as you need to! When you get to the Order page, you will get a description of that
            order, and maybe even some pictures, if your choices led you to specific bugs in that order.
            Don’t forget to click on them!
          </p>
          <p>
            This key will only get you to the Order of the bug you find. That means that you will
            have a very general idea of where your bug belongs. If you want more information or
            help with identification, check the link to the Resources page in the menu. Figuring
            out the family, genus, and even species will help you get the exact right bug.
          </p>
          <p>
            Some of the questions in the key require you to get up close and personal with your bug.
            The easiest way to do this is to put the bug to sleep or to kill it. The most humane way
            to kill an insect is by freezing. Place the bug in a jar and put it in the freezer overnight.
            If you only want to make it sleepy, put it in the freezer for 15 minutes to half an hour.
            Check your bug to make sure it’s slowed down or isn’t moving before you remove it from the freezer.
            There is still a risk of it freezing to death, but it’s not a bad way to go. Some of the
            questions may require a magnifying glass, but few will require a microscope. If you have access
            to a dissecting scope you are well on your way to being an entomologist! Check the Equipment
            page for more information on bug catching tools.
          </p>
          <p>
            Have fun!<br />
            Liz Sorensen
          </p>
          <p>
            This dichotomous key was pulled in its entirety from Borror and Delong's Introduction to the Study of
            Insects (7th ed.) by Triplehorn, C. A., & Johnson, N. F. (2005). The definitions are from many
            different places. All of the pictures are from the internet under the Creative Commons license or
            equivalent. Licensing information is available upon request. The descriptions of the Orders were
            taken from many places, including my education at UNL, Wikipedia, and BugGuide.net.
          </p>
        </div>
      </section>
    )
  }
}

/*!
 * Exports
 */

module.exports = Home
