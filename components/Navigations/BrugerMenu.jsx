import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddAndManage from './AddAndManage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const BurgerMenu = (props) => {
 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('AddAndManage')}>
                <Ionicons name="ios-menu" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        padding: 30,
    },
});

export default BurgerMenu;
