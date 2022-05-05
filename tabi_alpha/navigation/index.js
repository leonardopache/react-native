import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LandingAppScreen from '../screems/LandingApp';
import Home from '../screems/Home';
import Navbar from '../components/navbar/Navbar';
import Spin from '../components/spin/Spin';
import SignInScreen from '../screems/SignIn';
import SignUpScreen from '../screems/SignUp';
import ConfirmSignUp from '../screems/ConfirmSignUp';
import ResetAccessScreen from '../screems/ResetAccess';

const Navigation = () => {
  return (
    <NavigationContainer style={ styles.root }>
      
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LandingApp" component={LandingAppScreen} />
        
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
        <Stack.Screen name="ResetAccess" component={ResetAccessScreen} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root : { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    height: '100%',
    backgroundColor: '#d3ffce', 
  }
});
export default Navigation;
