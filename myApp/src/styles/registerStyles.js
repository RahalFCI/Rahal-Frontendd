import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const registerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pickerLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});