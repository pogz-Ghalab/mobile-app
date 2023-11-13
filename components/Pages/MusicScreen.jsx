import React from "react";
import { Text, View} from "react-native";
import { StyleSheet } from "react-native";
const MusicScreen = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.Text}> the muisc layout will be out soon </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    Text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 40,
        lineHeight: 90,

    }

})
export default MusicScreen;