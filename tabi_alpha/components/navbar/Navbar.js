import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screems/Home';
import Favorite from '../../screems/Favorite';

const Tab = createBottomTabNavigator();
const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Favorite') {
              iconName = 'star';
            } else if (route.name === 'Search') {
              iconName = 'search';
              route.blabla = 'abc'
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Favorite" component={Favorite} >
          <Text>M</Text>
        </Tab.Screen>
        <Tab.Screen name="Search" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navbar;