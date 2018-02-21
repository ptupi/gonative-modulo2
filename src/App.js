import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
