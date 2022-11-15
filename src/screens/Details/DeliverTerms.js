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
import {InputFeild} from '../../components/InputField';
import fonts from '../../assets/fonts';
const DeliverTerms = ({navigation}) => {
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
            Terms for Delivery
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
          <Text
            style={{
              color: '#999999',
              fontFamily: fonts.DongleBold,
              fontSize: 14,
            }}>
            Have a combined maximum weight of 15 kg and combined maximum value
            of 20$
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#999999',
              fontFamily: fonts.DongleBold,
              fontSize: 14,
            }}>
            Easily transportable on a bike
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#999999',
              fontFamily: fonts.DongleBold,
              fontSize: 14,
            }}>
            Are closed, securely sealed, and ready to be delivered
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#000000',
              fontFamily: fonts.DongleBold,
              fontSize: 18,
            }}>
            I agree to the terms for Delivery.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Ride")}
            style={{
              backgroundColor: '#E78901',
              paddingHorizontal: 40,
              paddingVertical: 14,
              borderRadius: 10,
            }}>
            <Text>Confirm Receipt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliverTerms;
