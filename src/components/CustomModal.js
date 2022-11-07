import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({
  Children,
  isModalVisible,
  onBackdropPress,
  backdropColor,
}) => {
  return (
    <>
      <Modal
        backdropColor={backdropColor}
        animationOutTiming={2000}
        style={{margin: 0}}
        onBackdropPress={onBackdropPress}
        isVisible={isModalVisible}>
        {Children}
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({});

export default CustomModal;
