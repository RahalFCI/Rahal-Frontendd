import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { loginStyles as styles } from '../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rahal!</Text>

      {/* Login button (placeholder) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Navigate to Register */}
      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;