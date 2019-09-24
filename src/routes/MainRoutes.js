import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import * as screens from '../screens';

// //Main Screens
const DrawerWrapper = createDrawerNavigator({
    Main: { screen: screens.Main },
    // History: { screen: History },
    // Perfil: { screen: Perfil },
    // DaysOff: { screen: DaysOff },
    // ChangePassword: { screen: ChangePassword }
},
{
    initialRouteName: 'Main',
    contentOptions: {
    activeTintColor: '#e91e63'
    },
    // contentComponent: props => <SideBar {...props} />
});

const MainStack = createStackNavigator({
      Drawer: {
          screen: DrawerWrapper
      },
      // Verification: { screen: Verification },
      // Notifications: { screen: Notifications }
  },
  {
      initialRouteName: 'Drawer',
      mode: 'modal',
      headerMode: 'none'
  });

export default MainStack;
