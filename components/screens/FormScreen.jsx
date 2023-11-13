import React from "react";
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";

const FormScreen = () => {
    const [NickName, setNickName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [address, setAddress] = useState('');
    const [clothesSize, setClothesSize] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    const navigation = useNavigation();

    const handleForm = async () => {


        /*   try {
              const response = await axios.post('http://192.168.0.83:8081/personal_info', {
                  age,
                  gender,
                  weight,
                  height,
                  address,
                  clothes_size: clothesSize,
                  favorite_color: favoriteColor
              });
            
          }  */
        navigation.navigate('FaceScanScreen'); 
      
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'cyan' }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nick Name"
                    value={NickName}
                    onChangeText={setNickName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                />
                <Picker
                    style={styles.input}
                    selectedValue={gender}
                    onValueChange={setGender}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Rather not say" value="unknown" />
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Weight"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Height"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value={address}
                    onChangeText={setAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Clothes Size"
                    value={clothesSize}
                    onChangeText={setClothesSize}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Favorite Color"
                    value={favoriteColor}
                    onChangeText={setFavoriteColor}
                />
                <Button title="Register" onPress={handleForm} />
            </View>
        </ScrollView>
    );
};

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

export default FormScreen;
