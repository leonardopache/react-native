import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { images } from '../constants';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { useNavigation } from '@react-navigation/core';

const LandingAppScreen = () => {
  const {height} = useWindowDimensions();
  //const navigation = useNavigation();

  const onSingInPress = () => {
    // navigation.navigate('SignIn');
  }

  const onSingUpPress = () => {
    // navigation.navigate('SignUp');
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
          source={ images.avatar_2 } 
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode='contain' />

      <CustomButton text='Sign In' onPress={onSingInPress()} />
      <CustomButton text='Sign Up' onPress={onSingUpPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default LandingAppScreen;
