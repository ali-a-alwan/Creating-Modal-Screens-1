import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomModal from './CustomModal';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={toggleModal} />
      <CustomModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

export default App;
