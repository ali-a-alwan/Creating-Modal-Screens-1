import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

const CustomModal = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text>This is a modal screen!</Text>
          <Button title="Close Modal" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
