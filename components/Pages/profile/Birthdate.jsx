import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Birthdate = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSaveBirthdate = () => {
   navigation.navigate('Profile2'); // Redirect back to Profile2 after saving the birthdate
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Date of Birth
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Add your date of birth information
      </Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Date Input Sections */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        {/* Month */}
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            flex: 1,
            marginRight: 5,
          }}
          placeholder="MM"
          keyboardType="numeric"
          value={month}
          onChangeText={(text) => setMonth(text)}
          maxLength={2}
        />

        {/* Day */}
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            flex: 1,
            marginRight: 5,
          }}
          placeholder="DD"
          keyboardType="numeric"
          value={day}
          onChangeText={(text) => setDay(text)}
          maxLength={2}
        />

        {/* Year */}
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            flex: 2,
          }}
          placeholder="YYYY"
          keyboardType="numeric"
          value={year}
          onChangeText={(text) => setYear(text)}
          maxLength={4}
        />
      </View>

      {/* Save Birthdate Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={handleSaveBirthdate}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Save Birthdate</Text>
      </TouchableOpacity>

      {/* Comment */}
      <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>
        Your age information will be updated on your profile page.
      </Text>
    </View>
  );
};

export default Birthdate;
