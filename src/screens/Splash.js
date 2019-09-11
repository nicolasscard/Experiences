import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';

const IMAGESPLASH = require('../assets/images/splash.jpg');

class Splash extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      metadata: null,
    };
  }

  render() {
    const { metadata } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Image
          source={IMAGESPLASH}
          style={{ width: 150, height: 134 }}
        />
        <ActivityIndicator />
        {metadata && (
          <Text style={styles.text}>
            {`Versión ${metadata.appVersion} - Build ${metadata.label}`}
          </Text>
        )}
      </View>
    );
  }
}

const styles = {
  text: {
    position: 'absolute',
    bottom: 10,
    color: '#FFF',
    opacity: 0.2,
  },
};

export default Splash;
