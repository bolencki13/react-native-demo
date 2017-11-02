import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/ButtonStyles'

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string,
    navigator: PropTypes.object
  }

  getText() {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render() {
    let buttonStyle = styles.button
    if (this.props.type === 'helper') {
      buttonStyle = styles.buttonHelper
    } else if (this.props.type === 'action') {
      buttonStyle = styles.buttonAction
    } else if (this.getText() === '0') {
      buttonStyle = styles.buttonLong
    }

    return (
      <TouchableOpacity style={buttonStyle} onPress={() => this.props.onPress(this.getText())}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
