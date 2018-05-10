import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBJJba7MSPj8oC3X87byWmchONyYLTRoEM',
      authDomain: 'manager-5c5ae.firebaseapp.com',
      databaseURL: 'https://manager-5c5ae.firebaseio.com',
      projectId: 'manager-5c5ae',
      storageBucket: '',
      messagingSenderId: '421613461480'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
