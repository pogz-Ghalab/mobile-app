import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSavePhoneNumber = () => {
 navigation.navigate('Profile2'); // Redirect back to Profile2 after saving the phone number
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Phone Number
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>Add your phone number</Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Phone Number Input */}
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      {/* Save Phone Number Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={handleSavePhoneNumber}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Save Phone Number</Text>
      </TouchableOpacity>

      {/* Comment */}
      <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>
        Your phone number will be updated on your profile page.
      </Text>
    </View>
  );
};

export default PhoneNumber;
