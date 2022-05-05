import * as React from 'react';
import { View, Text } from 'react-native';

const Home = ({navigation, route}) => {
  console.log(navigation, route);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello ...</Text>
    </View>
  );
};

export default Home;
