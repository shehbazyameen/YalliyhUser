import React, {useState} from 'react';
import {View, Button,TouchableOpacity,Text,Image,Dimensions} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import CustomModal from '../../components/CustomModal';
import {colors} from '../../config/Colors';
import StartModal from '../../components/StartModal';
import Styling from './Styling';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //

  const renderModal = () => {
    return (
      <View>
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

  return (
    <View style={[styling.Container]}>
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
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <View style={[styling.detailsParentContainer]}>
        <View style={[styling.details]}>
          <View style={[styling.detailRapper]}>
            <TouchableOpacity
              style={[styling.detailsButtons1]}
              onPress={() => navigation.navigate('RecieverDetails')}>
              <View style={[styling.imageRapper]}>
                <Image source={Assets.car}></Image>
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={[styling.text]}>Book</Text>
                <Text style={[styling.text]}>A Ride</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styling.detailsButtons2]}
              onPress={() => navigation.navigate('RecieverDetails')}>
              <View style={{marginHorizontal: 10}}>
                <Text style={[styling.text]}>Delivery</Text>
              </View>
              <View style={[styling.imageRapper]}>
                <Image source={Assets.car}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styling.search]}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => setModalVisible(true)}>
              <TouchableOpacity>
                <Text style={{color: '#000000'}}>Where to?</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{flexDirection: 'row', marginHorizontal: 5,justifyContent:"space-between",flex:0.25}}>
              <View
              style={{justifyContent:"center",alignItems:"center",height:20,width:20,borderRadius:100,borderWidth:1}}
              >
                <Image source={Assets.clockPoint} />
              </View>

              <Text style={{color: '#000000'}}>Now</Text>
              <Image />
            </TouchableOpacity> */}
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image />
            <Text style={{color: '#000000'}}>Home Location</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image />
            <Text style={{color: '#000000'}}>Work Location</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image />
            <Text style={{color: '#000000'}}>Saved Places</Text>
          </View>

          <View style={{flexDirection: 'row', margin: 10, marginTop: 15}}>
            <Image />
            <Text style={{color: '#000000'}}>Arround You</Text>
          </View>
        </View>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: 24.8681908,
          longitude: 67.0650614,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          icon={Assets?.path}
          coordinate={{latitude: 24.8681908, longitude: 67.0650614}}
          title={'title'}
          description={'description'}
        />
      </MapView>
      <CustomModal
        backdropColor={colors.transparent}
        Children={renderModal()}
        isModalVisible={isModalVisible}
        onBackdropPress={() => {
          toggleModal();
        }}
      />
    </View>
  );
};

export default Home;
