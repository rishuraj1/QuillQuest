import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen, LoginScreen, SignupScreen} from '../screens';

const Navigation = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Signup" component={SignupScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
