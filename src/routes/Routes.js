import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainStack from './MainRoutes';
import AuthStack from './AuthRoutes';

import * as screens from '../screens';

const AppNavigator = createSwitchNavigator({
    Splash: screens.Splash,
    AuthStack,
    MainStack
  }, { initialRouteName: 'Splash' }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
