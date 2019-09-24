import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import ThemeHelper from '../helpers/theme';

const Theme = ThemeHelper.getTheme();

class Splash extends Component {
  componentDidMount() {
    // Search all operation in background, when finish quit splash

    //Hardcode to access directly!!
    setTimeout(() => {
      if (true) {
        this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Login');
      }
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
          <View style={styles.headerBackground}>
            <View style={{ position: 'absolute', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 30 }}>
                {'Application Experiences'}
              </Text>
              <Text style={{ color: 'white', marginBottom: 50 }}>
                {'Scardilla Nicolás'}
              </Text>
              <ActivityIndicator color="white" size={'large'} />
            </View>
          </View>
          <Image
            source={Theme.splashImg}
            style={styles.imageBackground}
          />
      </View>
    );
  }
}

const styles = {
  headerBackground: {
    height: Theme.height - Theme.width,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBackground: {
     height: Theme.width,
     width: Theme.width,
     backgroundColor: 'orange'
  }
};

export { Splash };
