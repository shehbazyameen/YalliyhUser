import React, {useState} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import CustomModal from '../../components/CustomModal';
import {colors} from '../../config/Colors';
import { InputFeild } from '../../components/InputField';

const RecieverDetails = ({navigation}) => {
  return (
    <View style={{backgroundColor: colors.colorWhite, flex: 1}}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.menu}
        leftRoute={() => {
          navigation.openDrawer();
        }}
        centerTitle={labels.home}
        rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {
          navigation.navigate('Notification');
        }}
      />
      <View
        style={{
          backgroundColor: colors.colorWhite,
          borderTopEndRadius: 24,
          borderTopLeftRadius: 24,
          marginTop: -22,
          padding: 42,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image source={Assets?.path}></Image>
            </TouchableOpacity>
          </View>

          <Text style={{color: '#000000', marginLeft: 20}}>
            Who is receiving the package?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '65%',
            height: 1,
            marginTop: 20,
            marginLeft: 25,
            backgroundColor: '#00000050',
          }}></View>
        <View
          style={{
            marginTop: 30,
          }}>
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'Sender Name' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'abc'}
            leftIcon={Assets.user}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
        </View>
        <View
          style={{
            marginTop: 30,
          }}>
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            textLabels={'Sender Phone Number' + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            // placeholder={'abc'}
            leftIcon={Assets.phoneCall}
            // rightIcon={Assets.user}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={
              () => {
                navigation.navigate('DeliverTerms');
              }
              //
            }
            style={{
              backgroundColor: '#E78901',
              paddingHorizontal: 40,
              paddingVertical: 14,
              borderRadius: 10,
            }}>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecieverDetails;
