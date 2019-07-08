import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyD0G28UbdEMDQNhqtDmrAerq1UwgY8vDmw',
        authDomain: 'auth-64406.firebaseapp.com',
        databaseURL: 'https://auth-64406.firebaseio.com',
        projectId: 'auth-64406',
        storageBucket: '',
        messagingSenderId: '359269820461',
        appId: '1:359269820461:web:d571714fdfef75e0'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
};

export default App;
