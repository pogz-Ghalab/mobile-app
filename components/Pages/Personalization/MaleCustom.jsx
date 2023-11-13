import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

export const MaleCustom = () => {
  const [name, setName] = useState('');
  const [voiceType, setVoiceType] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      <Text style={{ fontSize: 16, color: 'white', marginBottom: 20 }}>
        Personalize the robot
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box label="Name" value={name} onChangeText={setName} />
        <Box label="Voice Type" value={voiceType} onChangeText={setVoiceType} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={require('../../../res/malecustom.jpeg')} style={{ width: 100, height: 100 }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Box label="Personality" />
        <Box label="Voice Velocity" />
      </View>
    </View>
  );
};

const Box = ({ label, value, onChangeText }) => (
  <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, flex: 1, marginRight: 10 }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{label}</Text>
    {value !== undefined ? (
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5 }}
        value={value}
        onChangeText={onChangeText}
      />
    ) : null}
  </View>
);

export default MaleCustom;
