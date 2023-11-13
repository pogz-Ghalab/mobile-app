import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-svg';
const LoginScreen = ({ }) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <>

            <View style={styles.container}>
                <Image source={require('../../res/epsi_smoke.png')} style={styles.images}/>
                <Text style={styles.title}>EPSILON</Text>
                <Text style={styles.subtitle}> the future </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.buttonText}>Sign UP</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    h1: {
        padding: 5,
        backgroundColor: 'white',
        fontSize: 20

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: "white"
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#888',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
  

});

export default LoginScreen;
