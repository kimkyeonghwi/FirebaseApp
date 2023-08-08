import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const FormButton = () => {
  return (
    <TouchableOpacity styles={styles.buttonContainer}>
      <Text style={styles.buttonText} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: 2,
    height: 15,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});

export default FormButton();
