import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
const CalenderScreen = () => {


  return (
    <>
      <Text> calander is going to be updated soon </Text>
    </>

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


export default CalenderScreen;