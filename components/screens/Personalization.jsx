import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Personalization = ({ }) => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
                Personalize the robot
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />


            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 10,
                    alignItems: 'center',
                }}
                onPress={() => navigation.navigate("Femalecustom")} // Replace with the actual route name
            >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Female</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    alignItems: 'center',
                }}
                onPress={() => navigation.navigate("Malecustom")} 
            >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Male</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Personalization;