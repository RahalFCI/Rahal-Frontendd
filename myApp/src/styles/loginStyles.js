import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginBottom: 15,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#ff6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});