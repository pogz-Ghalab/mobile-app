import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('Configuredevice')}>
          <SectionBox borderColor="#313F57">Configure Device</SectionBox>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('Profile1')}>
          <SectionBox borderColor="#FF484866">Profile</SectionBox>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('Family')}>
          <SectionBox borderColor="#324438">Family</SectionBox>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('personalization')}>
          <SectionBox borderColor="#574B2F">Personalization</SectionBox>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.sectionContainer}>
          <SectionBox borderColor="navy">Information</SectionBox>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer}>
          <SectionBox borderColor="#713BB580">Shop</SectionBox>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const SectionBox = ({ children, borderColor }) => (
  <View style={[styles.sectionBox, { borderColor, backgroundColor: borderColor }]}>
    <Text style={styles.sectionText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionBox: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default SettingScreen;
