import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAhvFeTCX_RSBad0VjJqpEP3U3lglt9Jlg',
      authDomain: 'auth-5edff.firebaseapp.com',
      databaseURL: 'https://auth-5edff.firebaseio.com',
      projectId: 'auth-5edff',
      storageBucket: 'auth-5edff.appspot.com',
      messagingSenderId: '398068466591'
    });

    firebase.auth().onAuthStateChanged((user) => {
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
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
