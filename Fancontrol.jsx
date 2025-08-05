import React from 'react';
import { View, Text, Switch, Slider, StyleSheet } from 'react-native';

const FanControl = ({ fanOn, setFanOn, fanSpeed, setFanSpeed }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Fan</Text>
    <Switch value={fanOn} onValueChange={setFanOn} />
    {fanOn && (
      <>
        <Text>Speed: {fanSpeed}</Text>
        <Slider
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={fanSpeed}
          onValueChange={setFanSpeed}
        />
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 15, marginVertical: 10, borderRadius: 10, elevation: 3 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
});

export default FanControl;
