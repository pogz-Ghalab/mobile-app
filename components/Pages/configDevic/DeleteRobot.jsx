import React from 'react';
import { View, Text } from 'react-native';

const DeleteRobot = () => {
    return (

        <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
                Delete device
            </Text>

            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                Delete a robot, this will permanently delete your robot and presets of your robot
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />
        </View>

    );
}

export default DeleteRobot;
