import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addBudget } from '../redux/actions/budget'
import { navigate } from '../redux/actions/navigate'
import styles from '../styles/main'
import validateCostInput from '../utils/costInput'

class BudgetSetting extends Component {
  constructor(props){
    super(props)
    this.state = {
      budget: '',
      messageCost: '',
      valid: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let budget = this.state.budget*100

    let checkValid =  validateCostInput(budget)
	
		this.setState({
			messageCost : checkValid.messageCost,
			valid : checkValid.valid
		})

    if(checkValid.valid) {
      this.props.dispatch(addBudget(budget))
      this.props.dispatch(navigate('budget'))
    }
  }  

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.getStartedText}>Set your budget $:</Text>

        <TextInput 
          placeholder='Your budget'
          name='budget'
          placeholderTextColor='#85756E'
          returnKeyType='next'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          style={styles.input}
          onChangeText={(text) => this.setState({budget: text})}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit} >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity> 

        {this.state.messageCost && <Text>{this.state.messageCost}</Text>}

      </View> 
    )
  }
}

export default connect()(BudgetSetting)