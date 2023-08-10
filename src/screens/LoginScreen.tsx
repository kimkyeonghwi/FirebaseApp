import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  const handleEmail = (userEmail: string) => {
    setEmail(userEmail);
  };

  const handlePassword = (userPassword: string) => {
    setPassword(userPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
      <FormInput value={email} onChangeText={handleEmail} autoCapitalize="none" labelValue={undefined} />
      <FormInput value={password} onChangeText={handlePassword} secureTextEntry={true} labelValue={undefined} />
      <FormButton buttonTitle="login" onPress={() => login(email, password)} />
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>New User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
  },
});

export default LoginScreen;
