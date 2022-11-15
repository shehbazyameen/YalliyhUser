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
import StartModal from '../../components/StartModal';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

 const renderModal = () => {
   return (
     <View
       style={{
         position: 'absolute',
         width: '100%',
         bottom: 0,
         backgroundColor: '#AFB1B340',
         borderRadius: 68,
       }}>
       <View
         style={{
           backgroundColor: colors.colorWhite,
           padding: 22,
           marginTop: 16,
           borderTopLeftRadius: 38,
           borderTopRightRadius: 38,
         }}></View>
       <StartModal
         image={Assets.dummyImageSquare}
         userName={'User Name'}
         userNameNo={'123456789'}
         tripId={'Trip ID: AB_001'}
         pickUpLocationTitle={'Drop off Location:'}
         pickUpLocation={'A-15, block 2, Street XYZ'}
         dropLocationTitle={'Drop off Location:'}
         dropLocation={'A-15, block 2, Street XYZ'}
         price={'10000'}
         date={'12/12/2022'}
         time={'12:12'}
         onPressPick={() => {
           alert('hi');
         }}
         onPressDrop={() => {
           alert('hi');
         }}
         onPressStartRide={() => {
           alert('hi');
         }}
         onPressCancel={() => {
           alert('hi');
         }}
       />
     </View>
   );
 };

const Ride = ({navigation}) => {
     const [isModalVisible, setModalVisible] = useState(false);
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
        centerTitle={'Ride'}
        rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {
          //   navigation.navigate('Notification');
          setModalVisible(true);
        }}
      />
      <View
        style={{
          backgroundColor: colors.colorWhite,
          //   borderTopEndRadius: 24,
          //   borderTopLeftRadius: 24,
          marginTop: -22,
          padding: 0,
          overflow: 'hidden',
        }}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.6,
            borderWidth: 1,
            // borderTopEndRadius: 24,
            // borderTopLeftRadius: 24,
            overflow: 'hidden',
            // borderColor: '#ffffff',
          }}
          initialRegion={{
            latitude: 24.8681908,
            longitude: 67.0650614,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            icon={Assets?.path}
            draggable
            onDragEnd={e => {
              console.log('dragEnd', e.nativeEvent.coordinate);
            }}
            onDragStart={() => console.log('drag start')}
            coordinate={{latitude: 24.8681908, longitude: 67.0650614}}
            title={'title'}
            description={'description'}
          />
        </MapView>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          backgroundColor: '#AFB1B340',
          borderRadius: 68,
        }}>
        <View
          style={{
            backgroundColor: colors.colorWhite,

            padding: 30,
            marginTop: 16,
            borderTopLeftRadius: 38,
            borderTopRightRadius: 38,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: 10,
                width: '30%',
                backgroundColor: '#37455030',
                height: 3,
              }}></View>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{color: '#000000', fontSize: 30}}>Hello Mark !</Text>
            <Text style={{color: '#000000', fontSize: 15}}>
              Where do you wish to send the package?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View
                style={{
                  flex: 0.1,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Image source={Assets.send} />
              </View>
              <View
                style={{
                  flex: 0.7,
                  marginLeft: -30,
                }}>
                <Text style={{color: '#999999', marginLeft: 20}}>
                  Pick up Location
                </Text>
                <View
                  style={{
                    width: '110%',
                    marginLeft: 20,
                    marginTop: 10,
                    backgroundColor: '#999999',
                    height: 0.3,
                  }}></View>
              </View>

              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Image source={Assets.pin} />
              </View>
            </View>

            <Image source={Assets.line} style={{margin: 5}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 0,
              }}>
              <View
                style={{
                  flex: 0.1,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 1,
                }}>
                <Image source={Assets.pin} />
              </View>
              <View
                style={{
                  flex: 0.7,
                  marginLeft: -30,
                }}>
                <Text style={{color: '#999999', marginLeft: 20}}>
                  Enter your drop off location
                </Text>
                <View
                  style={{
                    width: '110%',
                    marginLeft: 20,
                    marginTop: 10,
                    backgroundColor: '#999999',
                    height: 0.3,
                  }}></View>
              </View>

              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Image source={Assets.pin} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ride;
