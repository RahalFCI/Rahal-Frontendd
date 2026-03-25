import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles as styles } from '../styles/homeStyles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rahal Home!</Text>
      <Text style={styles.subtitle}>Your tourist adventure starts here 🌍</Text>
    </View>
  );
};

export default HomeScreen;