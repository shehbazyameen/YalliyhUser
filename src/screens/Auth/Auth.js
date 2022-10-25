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
import { InputFeild } from '../../components/InputFeild';

const Auth = () => {
  const {height, width} = Dimensions.get('window');
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(true);
  return (
    <View style={{height: height}}>
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
            justifyContent: 'center',
            // alignItems: 'center',
            paddingVertical: 30,
            paddingHorizontal: 30,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 6,
                backgroundColor: '#E0E0E066',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
          </View>
          {signUp ? (
            <ScrollView
              style={{
                paddingVertical: 15,
              }}>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'First Name*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'First Name'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Last Name*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Last Name'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Phone Number*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Phone Number'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Email*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Email'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Password*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Password*'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>

              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Email*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Password*'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{height: height / 25}} />
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                  onPress={() => {
                    setSignUp(false);
                    setLogin(true);
                  }}
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'grey'}}>Already Have An Account? </Text>
                  <Text
                    style={{color: 'black', textDecorationLine: 'underline'}}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : (
            <ScrollView
              style={{
                paddingVertical: 15,
              }}>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Email**'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Email*'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  onFocusBorderColor={true}
                  textLabels={'Password*'}
                  returnKeyType={'next'}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                  // imageInputField
                  placeholder={'Password'}
                  // leftIcon={Assets.Password}
                  // rightIcon={Assets.user}
                  // value={firstName}
                  // onChange={e => setFirstName(e)}
                />
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 5,
                }}>
                <Text style={{color: '#B4B4B4',textDecorationLine:"underline"}}>Forget Password?</Text>
              </TouchableOpacity>

              <View style={{height: height / 25}} />
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 34,
                    paddingVertical: 14,
                    backgroundColor: '#E78901',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#ffffff'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSignUp(true);
                    setLogin(false);
                  }}
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'grey'}}>Don't Have Account? </Text>
                  <Text
                    style={{color: 'black', textDecorationLine: 'underline'}}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
