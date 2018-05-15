import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'

import { checkUserToken } from '../redux/actions'

class Test extends Component {

    componentDidMount(){
        this.props.dispatch(checkUserToken())
        console.log('mount')
    }
    
    render() {
    console.log('here I am')
    return (
        <View>
            <Text>{ this.props.auth.isAuthenticated === true ? 'You are logged in' : 'You are NOT logged in' }</Text>
        </View>
    );
  }
}

function mapStateToProps(state){
    console.log('test', state)
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Test)