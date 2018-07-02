import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles/main'

class Budget extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <View>
            <Text style={styles.message}> Your budget is $: ${(this.props.budget/100).toFixed(2)} </Text>  

            { this.props.budget - this.props.totalSpend > 0
            ?
            <Text style={styles.message}>
            You have ${((this.props.budget - this.props.totalSpend)/100).toFixed(2)} left
            </Text>   
            :
            <Text style={styles.message}>
            You have over spent by ${((this.props.totalSpend - this.props.budget)/100).toFixed(2)}
            </Text> 
            }
            
          </View>
        </ScrollView>
      </View> 
    )
  }
}

const mapStateToProps = (state) => {
    
  return {
    budget: state.budget,
    totalSpend: state.totalSpend
  }
}

export default connect(mapStateToProps)(Budget)
