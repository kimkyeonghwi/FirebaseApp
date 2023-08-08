import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>{user.uid}</Text>
      <FormButton Title="Logout" onPress={() => logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  homeText: {
    fontSize: 20,
    color: '#333333',
  },
});

export default HomeScreen;
