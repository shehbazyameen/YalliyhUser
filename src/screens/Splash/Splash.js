import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {Assets} from '../../assets';

const Splash = ({navigation}) => {
  // go to home
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 2000);
  }, []);


  return (
    <ImageBackground source={Assets.splash} style={{flex: 1}}></ImageBackground>
  );
};

export default Splash;
