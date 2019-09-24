import React, { Component } from 'react';
// import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';

import AppContainer from './routes/Routes';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showSplash: true,
    };
  }

  // componentDidMount() {
  //
  // }

  render() {
    return (
      <AppContainer />
    );
    // <View>
    // <StatusBar barStyle="dark-content" />
    // <SafeAreaView>
    // <View>
    // {this.state.showSplash
    //   ? <Splash />
    //   : <AppContainer />
    // }
    // </View>
    // </SafeAreaView>
    // </View>
  }
}

  // const styles = StyleSheet.create({
  // });

export default App;
