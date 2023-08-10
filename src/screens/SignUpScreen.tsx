import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);

  const handleEmail = (userEmail: string) => {
    setEmail(userEmail);
  };

  const handlePassword = (userPassword: string) => {
    setPassword(userPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={handleEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput value={password} placeholderText="Password" onChangeText={handlePassword} secureTextEntry={true} />
      <FormButton buttonTitle="SignUp" onPress={() => register(email, password)} />
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
});

export default SignUpScreen;
