import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { ProgressBar } from 'react-native-paper';

const GoalScreen = () => {
  const [startWeight, setStartWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [trainingPerWeek, setTrainingPerWeek] = useState('');
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    loadGoalData();
  }, []);

  const loadGoalData = async () => {
    try {
      const data = await AsyncStorage.getItem('goalData');
      if (data) {
        const parsed = JSON.parse(data);
        setStartWeight(parsed.startWeight);
        setGoalWeight(parsed.goalWeight);
        setCurrentWeight(parsed.currentWeight);
        setTrainingPerWeek(parsed.trainingPerWeek);
        setReminder(parsed.reminder);
      }
    } catch (error) {
      console.error('Fehler beim Laden:', error);
    }
  };

  const saveGoalData = async () => {
    const goalData = {
      startWeight,
      goalWeight,
      currentWeight,
      trainingPerWeek,
      reminder,
    };

    try {
      await AsyncStorage.setItem('goalData', JSON.stringify(goalData));
      Alert.alert('Erfolg', 'Deine Zielsetzung wurde gespeichert!');
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
      Alert.alert('Fehler', 'Speichern fehlgeschlagen.');
    }
  };

  const calcProgress = () => {
    const start = parseFloat(startWeight);
    const goal = parseFloat(goalWeight);
    const current = parseFloat(currentWeight);

    if (isNaN(start) || isNaN(goal) || isNaN(current)) return 0;

    const total = Math.abs(start - goal);
    const progress = Math.abs(start - current);
    const percent = Math.min(progress / total, 1); // max 100 %

    return isNaN(percent) ? 0 : percent;
  };

  const progress = calcProgress();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎯 Persönliche Zielsetzung</Text>

      <Text style={styles.label}>Startgewicht (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={startWeight}
        onChangeText={setStartWeight}
      />

      <Text style={styles.label}>Zielgewicht (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={goalWeight}
        onChangeText={setGoalWeight}
      />

      <Text style={styles.label}>Aktuelles Gewicht (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={currentWeight}
        onChangeText={setCurrentWeight}
      />

      <Text style={styles.label}>Wie oft willst du pro Woche trainieren?</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={trainingPerWeek}
          onValueChange={(itemValue) => setTrainingPerWeek(itemValue)}>
          <Picker.Item label="Bitte wählen..." value="" />
          {[...Array(7)].map((_, i) => (
            <Picker.Item
              key={i + 1}
              label={`${i + 1} mal die Woche`}
              value={`${i + 1}`}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>💧 Täglicher Trink-Reminder</Text>
        <Switch value={reminder} onValueChange={setReminder} />
      </View>

      {startWeight && goalWeight && currentWeight ? (
        <View style={styles.progressContainer}>
          <Text style={styles.label}>
            Fortschritt: {(progress * 100).toFixed(0)}%
          </Text>
          <ProgressBar progress={progress} color="#4ade80" style={styles.progressBar} />
          <Text style={styles.motivation}>💪 Bleib dran, du schaffst das!</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={saveGoalData}>
        <Text style={styles.buttonText}>Speichern & Abschließen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  progressContainer: {
    marginVertical: 20,
  },
  progressBar: {
    height: 14,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginTop: 4,
  },
  motivation: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#16a34a',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#cde4f7',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default GoalScreen;
