import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzeOzqdNW6A9dKAyam_dMT83W1v4gSsGc',
      authDomain: 'authentication-20ed6.firebaseapp.com',
      databaseURL: 'https://authentication-20ed6.firebaseio.com',
      storageBucket: 'authentication-20ed6.appspot.com',
      messagingSenderId: '520740387241'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }

  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
