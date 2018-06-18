import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, 
        TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addBudget } from '../redux/actions/budget'
import { navigate } from '../redux/actions/navigate'

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
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View>
              <Text style={styles.getStartedText}>Set your budget $:</Text>
              <TextInput 
                placeholder='Your budget'
                name='budget'
                placeholderTextColor='#85756E'
                returnKeyType='next'
                // onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                style={styles.input}
                onChangeText={(text) => this.setState({budget: text})}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit} >
                    <Text style={styles.input}>SUBMIT</Text>
                </TouchableOpacity>  
            </View>
          </ScrollView>
      </View> 
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10
    },
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
      
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
  });

export default connect()(BudgetSetting)