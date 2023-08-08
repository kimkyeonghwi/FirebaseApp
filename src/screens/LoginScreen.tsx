import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <View>
      <Text />
      <FormInput
        value={email}
        placeholder="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholoder="Password"
        onchangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Login" onPress={() => login(email, password)} />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginButtonText}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 15,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#6646ee',
  },
});

export default LoginScreen;
