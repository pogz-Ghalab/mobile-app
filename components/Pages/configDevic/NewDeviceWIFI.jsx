import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewDeviceWIFI = () => {

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
                WIFI
            </Text>

            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                connect to the same wifi as the one on your phone
            </Text>

            {/* Add your fake Bluetooth devices content here */}
        </View>
    );
}

export default NewDeviceWIFI;