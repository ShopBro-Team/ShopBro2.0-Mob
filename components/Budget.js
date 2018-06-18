import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, 
        TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

class Budget extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.getStartedText}>Your budget is $: ${(this.props.budget/100).toFixed(2)}</Text>  

            { this.props.budget - this.props.totalSpend > 0
            ?
            <Text >
            You have ${((this.props.budget - this.props.totalSpend)/100).toFixed(2)} left
            </Text>   
            :
            <Text >
            You have over spent by ${((this.props.totalSpend - this.props.budget)/100).toFixed(2)}
            </Text> 
            }
            
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

  const mapStateToProps = (state) => {
    
    return {
      budget: state.budget,
      totalSpend: state.totalSpend
    }
  }

export default connect(mapStateToProps)(Budget)
