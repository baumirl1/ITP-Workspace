import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StartScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen bei FitApp</Text>
      <Button title="Loslegen" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
