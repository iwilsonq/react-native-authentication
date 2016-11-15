import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzeOzqdNW6A9dKAyam_dMT83W1v4gSsGc',
      authDomain: 'authentication-20ed6.firebaseapp.com',
      databaseURL: 'https://authentication-20ed6.firebaseio.com',
      storageBucket: 'authentication-20ed6.appspot.com',
      messagingSenderId: '520740387241'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
