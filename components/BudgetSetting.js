import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, 
        TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addBudget } from '../redux/actions/budget'
import { navigate } from '../redux/actions/navigate'
import styles from '../styles/mainForms'

class BudgetSetting extends Component {
  constructor(props){
    super(props)
    this.state = {
      budget: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let budget = this.state.budget*100

    this.props.dispatch(addBudget(budget))
    this.props.dispatch(navigate('budget'))
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

      </View> 
    )
  }
}

// const styles = StyleSheet.create ({
//   container: {
//     padding: 20
//   }
// })

export default connect()(BudgetSetting)