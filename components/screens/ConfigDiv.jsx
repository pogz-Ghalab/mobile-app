import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfigureDevice = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
                Configure Device
            </Text>

            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                Configure a new device, add a new device or service to your house
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image source={require('../../../my-project/res/smallRobot.jpeg')} style={{ width: 20, height: 20, marginRight: 10 }} />
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
                    onPress={() => navigation.navigate("NewdeviceBT")} 
                >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>New Device</Text>
                </TouchableOpacity>
                  </View>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                Add and configure a new robot
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image source={require('../../../my-project/res/chain.jpeg')} style={{ width: 20, height: 20, marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Work with Robotlife</Text>
            </View>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                Link one of your robots or services for it to be able to work with Robotlife
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>Danger Zone</Text>
            </View>

            <View style={{ marginTop: 10 }} />

            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
                onPress={() => navigation.navigate("NewdeviceBT")} // Replace 'DeleteRobotPage' with the actual name of the page you want to navigate to
            >
                <Image source={require('../../../my-project/res/garbage.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                    Delete a robot
                </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                This will erase the memory and presets of your robot
            </Text>
        </View>
    );
};

export default ConfigureDevice;
