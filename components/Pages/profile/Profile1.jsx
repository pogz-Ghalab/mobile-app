import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile1 = () => {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Profiles
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Create a new profile or modify an existing one.
      </Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Profile Box */}
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>John Doe</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Date of Birth: January 1, 1990</Text>
      </View>

      {/* Additional Sign */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Profile2') }
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile1;
