import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FanControl from './FanControl';
import ACControl from './ACControl';
import LightControl from './LightControl';

const App = () => {
  const [fanOn, setFanOn] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(1);

  const [acOn, setAcOn] = useState(false);
  const [acTemp, setAcTemp] = useState(24);

  const [lightOn, setLightOn] = useState(false);
  const [lightBrightness, setLightBrightness] = useState(50);
  const [lightColor, setLightColor] = useState('white');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Smart Home Control</Text>
      <FanControl fanOn={fanOn} setFanOn={setFanOn} fanSpeed={fanSpeed} setFanSpeed={setFanSpeed} />
      <ACControl acOn={acOn} setAcOn={setAcOn} acTemp={acTemp} setAcTemp={setAcTemp} />
      <LightControl
        lightOn={lightOn}
        setLightOn={setLightOn}
        lightBrightness={lightBrightness}
        setLightBrightness={setLightBrightness}
        lightColor={lightColor}
        setLightColor={setLightColor}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f2f2f2' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default App;
