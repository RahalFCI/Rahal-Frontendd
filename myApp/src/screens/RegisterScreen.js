import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { registerStyles as styles } from '../styles/registerStyles';
import { registerAdmin } from '../services/api';

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    age: '',
    gender: '',
    profilePictureUrl: '',
  });

  // Example: token from Postman collection (replace if dynamic)
  const bearerToken = 'yourBearerTokenHere';

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleRegister = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill all required fields!');
      return;
    }
    try {
      await registerAdmin(form, bearerToken);
      Alert.alert('Success', 'Registration complete!');
      navigation.replace('Home'); // navigate to Home on success
    } catch (err) {
      Alert.alert('Error', err.response?.data?.detail || 'Something went wrong');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>

      {Object.keys(form).map((key) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          secureTextEntry={key.includes('password')}
          keyboardType={key === 'phoneNumber' || key === 'age' ? 'numeric' : 'default'}
          onChangeText={(text) => handleChange(key, text)}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;