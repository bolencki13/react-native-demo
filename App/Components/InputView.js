import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import Button from './Button.js'

// Styles
import styles from './Styles/InputViewStyles.js'

export default class InputView extends Component {
  static propTypes = {
    onInput: PropTypes.func,
    onAction: PropTypes.func,
    onHelper: PropTypes.func,
    navigator: PropTypes.object
  }

  render () {
    return (
      <View style={styles.input}>
        <View style={styles.inputRow}>
          <Button type={"helper"} onPress={this.props.onHelper}>AC</Button>
          <Button type={"helper"} onPress={this.props.onHelper}>+/-</Button>
          <Button type={"helper"} onPress={this.props.onHelper}>%</Button>
          <Button type={"action"} onPress={this.props.onAction}>÷</Button>
        </View>
        <View style={styles.inputRow}>
          <Button onPress={this.props.onInput}>7</Button>
          <Button onPress={this.props.onInput}>8</Button>
          <Button onPress={this.props.onInput}>9</Button>
          <Button type={"action"} onPress={this.props.onAction}>x</Button>
        </View>
        <View style={styles.inputRow}>
          <Button onPress={this.props.onInput}>4</Button>
          <Button onPress={this.props.onInput}>5</Button>
          <Button onPress={this.props.onInput}>6</Button>
          <Button type={"action"} onPress={this.props.onAction}>-</Button>
        </View>
        <View style={styles.inputRow}>
          <Button onPress={this.props.onInput}>1</Button>
          <Button onPress={this.props.onInput}>2</Button>
          <Button onPress={this.props.onInput}>3</Button>
          <Button type={"action"} onPress={this.props.onAction}>+</Button>
        </View>
        <View style={styles.inputRow}>
          <Button onPress={this.props.onInput}>0</Button>
          <Button onPress={this.props.onInput}>.</Button>
          <Button type={"action"} onPress={this.props.onAction}>=</Button>
        </View>
      </View>
    )
  }
}
