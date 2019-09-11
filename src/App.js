import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';
import Splash from './screens/Splash';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showSplash: true,
    };
  }

  componentDidMount() {
    // Search all operation in background, when finish quit splash
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 3000);
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            {this.state.showSplash
              ? <Splash />
              : <View>
                  <Text> Welcome to Experiences!</Text>
                </View>
            }
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;
