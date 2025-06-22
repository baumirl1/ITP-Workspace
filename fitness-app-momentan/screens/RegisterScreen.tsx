import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrieren</Text>
      <TextInput placeholder="E-Mail" style={styles.input} />
      <TextInput placeholder="Passwort" secureTextEntry style={styles.input} />
      <TextInput placeholder="Passwort wiederholen" secureTextEntry style={styles.input} />
      <Button title="Registrieren" onPress={() => { /* registrierung logic */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});
