import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId: '192091912437-vthneedn5hkfosh3cur0df3fvsgjhcca.apps.googleusercontent.com',
  });
};

const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

const App = () => {
  useEffect(() => {
    googleSigninConfigure();
  });
  return (
    <SafeAreaView>
      <GoogleSigninButton onPress={() => onGoogleButtonPress()} />
      <Text>asd</Text>
    </SafeAreaView>
  );
};

export default App;
