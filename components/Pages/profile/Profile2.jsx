import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Profile2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Create a Profile
      </Text>

      {/* Subtitle */}
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>Create a new profile</Text>

      {/* Separation Line */}
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      {/* Square Box for Phone Number and Birthday Date */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 5 }}
          onPress={() => navigation.navigate('Phonenumber')}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Phone Number</Text>
          {/* Add your phone number content here */}
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 10, marginLeft: 5 }}
          onPress={() => navigation.navigate('Birthdate')}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Birthday Date</Text>
          {/* Add your birthday date content here */}
        </TouchableOpacity>
      </View>

      {/* Square Box for Personality and Address */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 10, marginRight: 5 }}
          onPress={() => navigation.navigate('Personality')}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Personality</Text>
          {/* Add your personality content here */}
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 10, marginLeft: 5 }}
          onPress={() => navigation.navigate('Address')}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Address</Text>
          {/* Add your address content here */}
        </TouchableOpacity>
      </View>

      {/* Gender */}
      <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, width: 120 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Gender</Text>
            {/* Add your gender content here */}
          </View>
        </View>
      </TouchableOpacity>

      {/* Username Title */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Username</Text>
      </View>

      {/* Plus sign */}
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
        onPress={() => navigation.navigate('NewPage')}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile2;
