import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import fonts from '../assets/fonts';
import {colors} from '../config/Colors';

const {width, height} = Dimensions.get('window');

const ListText = ({
  onPress = () => {},
  title,
  subTitle,
  height = width / 6,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.centerView, {height: height}]}>
      <Text style={styles.textTitle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.textSubTitle} numberOfLines={1}>
        {subTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default ListText;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  hW: {
    height: 32,
    width: 32,
  },

  textTitle: {
    fontSize: 10,
    fontFamily: fonts.PoppinsLight,
    color: colors.lightGray,
    // marginBottom: -10,
  },
  textSubTitle: {
    fontSize: 12,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
  },
});
