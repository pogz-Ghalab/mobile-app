import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Address = ({ navigation }) => {
  const [addressText, setAddressText] = React.useState('');

  const handleSaveAddress = () => {
  navigation.navigate('Profile2'); // Redirect back to Profile2 after saving the address
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Address
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>Add your address information</Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Address Input */}
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Enter your address"
        value={addressText}
        onChangeText={(text) => setAddressText(text)}
      />

      {/* Save Address Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={handleSaveAddress}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Save Address</Text>
      </TouchableOpacity>

      {/* Comment */}
      <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>
        Your address information will be updated on your profile page.
      </Text>
    </View>
  );
};

export default Address;
