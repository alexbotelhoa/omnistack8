import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
// import Devs from './pages/Devs';

const AppStack = createStackNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Login" mode="modal">
            <AppStack.Screen name="Login" component={Login} />
            {/* <AppStack.Screen name="Devs" component={Devs} /> */}
         </AppStack.Navigator>
      </NavigationContainer>
   );
}