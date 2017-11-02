import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { InputView, OutputView } from '../Components/'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(){
    super();

    this.state = {
      input: "0",
      lastInput: "0",
      operator: ""
    }

    this._onInput = this._onInput.bind(this)
    this._onAction = this._onAction.bind(this)
    this._onHelper = this._onHelper.bind(this)
  }

  // Button actions
  _onInput(sender) {
    if (sender === "." && this.state.input.includes(".")) return
    this.setState({
      input: (this.state.input == "0" && sender !== ".") ? sender : this.state.input += sender,
      lastInput: this.state.lastInput,
      operator: this.state.operator
    })
  }
  _onAction(sender) {
    let _input = parseFloat(this.state.input)
    let _lastInput = parseFloat(this.state.lastInput)
    let result

    switch (this.state.operator) {
      case "÷":
        result = String(_lastInput / _input)
        break;
      case "X":
        result = String(_lastInput * _input)
        break;
      case "-":
        result = String(_lastInput - _input)
        break;
      case "+":
        result = String(_lastInput + _input)
        break;
    }

    if (sender === "=" && this.state.operator !== "") {
      this.setState({
        input: result,
        lastInput: "0",
        operator: ""
      })
    } else if (this.state.operator !== "" ) {
      this.setState({
        input: "0",
        lastInput: result,
        operator: sender
      })
    } else {
      this.setState({
        input: "0",
        lastInput: String(_input),
        operator: sender
      })
    }
  }
  _onHelper(sender) {
    let input = parseFloat(this.state.input)

    switch (sender) {
      case "AC":
        this.setState({
          input: "0",
          lastInput: "0",
          operator: ""
        })
        break;
      case "+/-":
        input *= -1
        this.setState({
          input: String(input),
          lastInput: this.state.lastInput,
          operator: this.state.operator
        })
        break;
      case "%":
        this.setState({
          input: String(input / 100),
          lastInput: this.state.lastInput,
          operator: this.state.operator
        })
        break;
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <OutputView text={this.state.input}></OutputView>
        <InputView onInput={this._onInput} onAction={this._onAction} onHelper={this._onHelper}></InputView>
      </View>
    )
  }
}
