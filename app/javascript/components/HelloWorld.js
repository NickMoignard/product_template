import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.gretting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  gretting: PropTypes.string
};
export default HelloWorld
