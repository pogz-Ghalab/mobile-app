import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.leftButton}>
                        <Text style={styles.buttonText}>ADD Device</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')} style={styles.leftButton}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <Text style={styles.MainText}> Connect to Device  </Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../res/add_button.png')} style={styles.images} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'lightyellow' }]}>
                            <Text style={styles.buttonText}>BOADCAST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'lightgreen' }]}>
                            <Text style={styles.buttonText}>Media</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'lightblue' }]}>
                            <Text style={styles.buttonText}>Routine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    MainText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 50,
        marginBottom: 10,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    images: {
        // Add any additional styles for the image if needed
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    leftButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10,
    },
});


export default HomeScreen;

