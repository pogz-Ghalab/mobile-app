import { Settings, StyleSheet, View } from 'react-native';
import { ScrollView, Text } from 'react-native';
import BurgerMenu from './components/Navigations/BrugerMenu';
import { createStackNavigator } from '@react-navigation/stack';
import AddAndManage from './components/Navigations/AddAndManage'
import HomeScreen from './components/screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './components/screens/LoginScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import CalendarScreen from './components/Pages/CalenderScreen';
import MusicScreen from './components/Pages/MusicScreen';
import FormScreen from './components/screens/FormScreen';
import FaceScanScreen from './components/screens/FaceScanScreen';
import SettingScreen from './components/screens/SettingScreen';
import Profile1 from './components/Pages/profile/Profile1';
import Profile2 from './components/Pages/profile/Profile2';
import Address from './components/Pages/profile/Address';
import Birthdate from './components/Pages/profile/Birthdate';
import Gender from './components/Pages/profile/Gender';
import Personality from './components/Pages/profile/Personality';
import PhoneNumber from './components/Pages/profile/PhoneNumber';
import Personalization from './components/screens/Personalization';
import { MaleCustom } from './components/Pages/Personalization/MaleCustom';
import FemaleCustom from './components/Pages/Personalization/FemaleCustom';
import ConfigureDevice from './components/screens/ConfigDiv';
import DeleteRobot from './components/Pages/configDevic/DeleteRobot';
import NewDeviceBT from './components/Pages/configDevic/NewDeviceBT';
import NewDeviceWIFI from './components/Pages/configDevic/NewDeviceWIFI';
const { Navigator, Screen } = createStackNavigator();

const App = () => {

  return (
    
    <NavigationContainer>

      <Navigator>
        <Screen name="LoginScreen" component={LoginScreen}></Screen>
        <Screen name="SignUpScreen" component={SignUpScreen}></Screen>
        <Screen name="HomeScreen" component={HomeScreen}></Screen>
        <Screen name="SettingScreen" component={SettingScreen}></Screen>
        <Screen name="Configuredevice" component={ConfigureDevice}></Screen>
        <Screen name="NewdeviceBT" component={NewDeviceBT}></Screen>
        <Screen name="NewdeviceWIFI" component={NewDeviceWIFI}></Screen>
        <Screen name="Deleterobot" component={DeleteRobot}></Screen>
        <Screen name="Profile1" component={Profile1}></Screen>
        <Screen name="Profile2" component={Profile2}></Screen>
        <Screen name="Address" component={Address}></Screen>
        <Screen name="Birthdate" component={Birthdate}></Screen>
        <Screen name="Gender" component={Gender}></Screen>
        <Screen name="Personality" component={Personality}></Screen>
        <Screen name="Phonenumber" component={PhoneNumber}></Screen>
        <Screen name="personalization" component={Personalization}></Screen>
        <Screen name="Malecustom" component={MaleCustom}></Screen>
        <Screen name="Femalecustom" component={FemaleCustom}></Screen>
        <Screen name="AddAndManage" component={AddAndManage}></Screen>
        <Screen name="CalendarScreen" component={CalendarScreen}></Screen>
        <Screen name="MusicScreen" component={MusicScreen}></Screen>
        <Screen name="FormScreen" component={FormScreen}></Screen>
        <Screen name="FaceScanScreen" component={FaceScanScreen}></Screen>
      </Navigator>

    </NavigationContainer>
  );
}

export default App;