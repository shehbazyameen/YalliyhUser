import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import fonts from '../../assets/fonts';
import {colors} from '../../config/Colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  detailsParentContainer: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailRapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  imageRapper: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: fonts.DongleRegular,
    fontSize: 18,
    Color: '#FFFFFF',
  },
  details: {
    position: 'absolute',
    // height: height / 2.8,
    width: '90%',
    backgroundColor: '#ffffff',
    zIndex: 9999,
    borderRadius: 20,
    bottom: -290,
    padding: 30,
  },
  detailsButtons1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#000024',
    borderRadius: 15,
  },
  detailsButtons2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#E78901',
    borderRadius: 15,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop:15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#F4F5FA',
    borderRadius: 10,
  },
  //Modal
  textTitle: {
    fontSize: 10,
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
    paddingBottom: 28,
  },

  textTime: {
    fontSize: 10,
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
  },
  textHours: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
});
