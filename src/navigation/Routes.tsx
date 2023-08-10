import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {AuthContext} from './AuthProvider';
import Loading from '../components/Loading';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function _onAuthStateChanged(_user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_onAuthStateChanged);
    return subscriber;
  }, []);
  if (loading) {
    return <Loading />;
  }
  return <NavigationContainer>{user ? <HomeStack /> : <AuthStack />}</NavigationContainer>;
};

export default Routes;
