import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  //jsx
  return (
    <View style={styles.container}>
      <Text>Meu primeiro mobile app RN </Text>
      <Button title="Já sei construir mobile app"/>
      <Text> Para mandar pro git </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
