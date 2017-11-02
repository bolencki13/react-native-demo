import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

// Styles
import styles from './Styles/OutputViewStyles.js'

export default class InputView extends Component {
  static propTypes = {
    text: PropTypes.string,
    navigator: PropTypes.object
  }

  getText() {
    const textOutput = this.props.text || ''
    return textOutput
  }

  render () {
    return (
      <View style={styles.output}>
        <Text style={styles.outputText}>{this.props.text}</Text>
      </View>
    )
  }
}
