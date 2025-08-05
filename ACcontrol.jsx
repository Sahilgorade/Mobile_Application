import React from 'react';
import { View, Text, Switch, Slider, StyleSheet } from 'react-native';

const ACControl = ({ acOn, setAcOn, acTemp, setAcTemp }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Air Conditioner</Text>
    <Switch value={acOn} onValueChange={setAcOn} />
    {acOn && (
      <>
        <Text>Temperature: {acTemp}°C</Text>
        <Slider
          minimumValue={16}
          maximumValue={30}
          step={1}
          value={acTemp}
          onValueChange={setAcTemp}
        />
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 15, marginVertical: 10, borderRadius: 10, elevation: 3 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
});

export default ACControl;
