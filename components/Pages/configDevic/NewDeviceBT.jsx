import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewDeviceBT = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        NEW DEVICE
      </Text>

      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Add and configure a new robot or RobotLife related accessories
      </Text>

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
        Bluetooth
      </Text>

      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Connect to your EpsiBot companion
      </Text>

      {/* Add your fake Bluetooth devices content here */}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          width: 100,
          height: 40,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('NewdeviceWIFI')} // Replace 'NewPage' with the name of the new page you want to navigate to
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewDeviceBT;
