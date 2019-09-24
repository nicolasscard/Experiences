import { createStackNavigator } from 'react-navigation-stack';

import * as screens from '../screens';

// //Auth Screens
const AuthStack = createStackNavigator({
  Login: { screen: screens.Login, navigationOptions: () => ({ header: null }) },
});

export default AuthStack;
