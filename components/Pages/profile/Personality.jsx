import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Personality = ({ navigation }) => {
  const [personalityText, setPersonalityText] = React.useState('');

  const handleSavePersonality = () => {
    navigation.navigate('Profile2'); // Redirect back to Profile2 after saving the personality information
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
        Personality
      </Text>


      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Write down some key points of your personality.
      </Text>

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 20 }} />

      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Express your personality here"
        value={personalityText}
        onChangeText={(text) => setPersonalityText(text)}
        multiline
      />

      {/* Save Personality Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={handleSavePersonality}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Save Personality</Text>
      </TouchableOpacity>

      {/* Comment */}
      <Text style={{ fontSize: 14, color: 'white', marginTop: 20 }}>
        Your personality information will be updated on your profile page. This will help your EpsiBot
        companion to understand you better.
      </Text>
    </View>
  );
};

export default Personality;
