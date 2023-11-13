// Client-side code (React Native)

import React from "react";
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from "react";
import axios from 'axios';
import { useNavigation, } from '@react-navigation/native';

const SignUpScreen = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Password Mismatch', 'The passwords entered do not match.');
            return;
        }

        console.log("-checking if server.");
        //let res = await 
        let res = axios.post('http://192.168.0.83:8081/registration', {
            reg_first_name: first_name,
            reg_last_name: last_name, 
            reg_email: email,
            reg_password: password
        })

        if (res.data === "KO") {
            console.warn("Username already exists");
            Alert.alert('Username exists, please try another username');
            navigation.navigate('SignUpScreen');
        } else {
            Alert.alert('Sign Up Successful');
            navigation.navigate('HomeScreen');
            
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={first_name}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={last_name}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default SignUpScreen;
