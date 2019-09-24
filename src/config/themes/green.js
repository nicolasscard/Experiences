import { Dimensions, PixelRatio, Platform } from 'react-native';

// Image splash
const splashImg = require('../../assets/images/greenSplash.jpg');

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
    primary: '#499392',
    secondary: '#666666'
  }
};
