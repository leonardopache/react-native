import React from 'react';
import { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import Navigation from './navigation';

const loading = false;
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;