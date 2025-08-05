import React from 'react';
import { View, Text, Switch, Slider, StyleSheet, TouchableOpacity } from 'react-native';

const LightControl = ({ lightOn, setLightOn, lightBrightness, setLightBrightness, lightColor, setLightColor }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Lights & Bulbs</Text>
    <Switch value={lightOn} onValueChange={setLightOn} />
    {lightOn && (
      <>
        <Text>Brightness: {lightBrightness}%</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={lightBrightness}
          onValueChange={setLightBrightness}
        />
        <Text>Color:</Text>
        <View style={styles.colorOptions}>
          {['white', 'red', 'blue', 'green', 'yellow'].map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorBox, { backgroundColor: color, borderColor: lightColor === color ? 'black' : 'gray' }]}
              onPress={() => setLightColor(color)}
            />
          ))}
        </View>
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 15, marginVertical: 10, borderRadius: 10, elevation: 3 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  colorOptions: { flexDirection: 'row', marginTop: 10 },
  colorBox: { width: 30, height: 30, borderRadius: 5, marginRight: 10, borderWidth: 2 },
});

export default LightControl;
