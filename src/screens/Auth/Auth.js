import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Assets} from '../../assets';

const Auth = () => {
  const {height, width} = Dimensions.get('window');
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(true);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.2}}>
        <ImageBackground
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          source={Assets.headerBg}>
          <Image source={Assets.logo} />
        </ImageBackground>
      </View>

      <View style={{backgroundColor: '#000024', flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            // justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 30,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              paddingHorizontal: 7,
              paddingVertical: 6,
              backgroundColor: '#E0E0E066',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 10,
              width: width / 2,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: signUp ? '#E78901' : 'transparent',
                borderRadius: 10,
              }}
              onPress={() => {
                setSignUp(true);
                setLogin(false);
              }}>
              <Text
                style={{
                  color: signUp ? '#ffffff' : 'black',
                  paddingHorizontal: 25,
                  paddingVertical: 9,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: login ? '#E78901' : 'transparent',
                borderRadius: 10,
              }}
              onPress={() => {
                setSignUp(false);
                setLogin(true);
              }}>
              <Text
                style={{
                  color: login ? '#ffffff' : 'black',
                  paddingHorizontal: 25,
                  paddingVertical: 9,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
          style={{
            flex:1
          }}
          >

          </ScrollView>
          <TouchableOpacity
            style={{
              paddingHorizontal: 34,
              paddingVertical: 14,
              backgroundColor: '#E78901',
              borderRadius: 10,
            }}>
            <Text style={{color: '#ffffff'}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setSignUp(false);setLogin(true)}}
          style={{
            flexDirection:"row"
          }}
          >
            <Text style={{color: 'grey'}}>Already Have An Account? </Text>
            <Text style={{color:"black",textDecorationLine:"underline"}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Auth;
