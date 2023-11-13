import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Gender = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleSaveGender = () => {
   navigation.navigate('Profile2'); // Redirect back to Profile2 after saving the gender
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Gender
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>Enter your gender</Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Gender Options */}
      <TouchableOpacity
        style={{
          backgroundColor: selectedGender === 'male' ? 'gray' : 'white',
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedGender('male')}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: selectedGender === 'female' ? 'gray' : 'white',
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedGender('female')}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Female</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: selectedGender === 'other' ? 'gray' : 'white',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => setSelectedGender('other')}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rather not say</Text>
      </TouchableOpacity>

      {/* Save Gender Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleSaveGender}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Save Gender</Text>
      </TouchableOpacity>

      {/* Comment */}
      <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>
        Your gender information will be updated on your profile page.
        This will help your EpiBot companion to understand you better.
      </Text>
    </View>
  );
};

export default Gender;
