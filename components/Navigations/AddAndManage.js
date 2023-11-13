import React from "react";
import { View } from "react-native";
import { Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet, useState } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AddAndManage = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.Text1}> <Image source={require('../../res/add_button.png')} style={styles.images} />  Configure a Device </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('FormScreen')}>
                        <Text style={styles.Text1}> <Image source={require('../../res/add_button.png')} style={styles.images} /> Add a person to the App</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
                        <Text style={styles.Text1}> <Image source={require('../../res/music_symbol.png')} style={styles.images} /> Music </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
                        <Text style={styles.Text1}> <Image source={require('../../res/Calender_symbol.png')} style={styles.images} /> Calendar</Text>
                    </TouchableOpacity>
                    <Text style={styles.Text1}> <Image source={require('../../res/add_button.png')} style={styles.images} />  Shop </Text>

                    <Text style={styles.Text1}> <Image source={require('../../res/Service_symbol.png')} style={styles.images} />  Premium Service </Text>
                    <Text style={styles.Text1}> <Image source={require('../../res/others_symbol.png')} style={styles.images} />Other Services </Text>
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    Text1: {
        color: 'white',
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 90,
    },

    images: {
        width: 35,
        height: 40,
    }
})


export default AddAndManage;