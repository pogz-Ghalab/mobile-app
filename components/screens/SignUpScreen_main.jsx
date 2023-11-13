import React from "react";
import { Text } from "react-native-svg";
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPAssword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert('Password Mismatch', 'The passwords entered do not match.');
            return;
        }
 /*  axios.post('http://localhost:8080/signup', userData)
            .then(response => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                Alert.alert('Sign Up Successful');

                navigation.navigate('HomeScreen');
            }) */
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPAssword('');

        // Display a success message
        Alert.alert('Sign Up Successful');

    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
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
                placeholder="confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPAssword}
            />
            <Button title="Sign Up" onPress={(handleSignUp) => navigation.navigate('HomeScreen')} />
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