import { Dimensions, PixelRatio, Platform } from 'react-native';

// Image splash
const splashImg = require('../../assets/images/blueSplash.png');

//Dimensions
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default {

  //iamges
  splashImg,

  // Dimensions
  width: deviceWidth,
  height: deviceHeight,

  //Main Colors
  colors: {
    primary: '#4B4B89',
    secondary: '#666666'
  }
};
