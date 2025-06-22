import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { EXERCISES, Exercise } from '../data/exercises';

type Props = NativeStackScreenProps<RootStackParamList, 'ExerciseList'>;

export default function ExerciseListScreen({ route }: Props) {
  const { group, subGroup } = route.params;
  const [completed, setCompleted] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredExercises = useMemo(() =>
    EXERCISES.filter(
      (ex) => ex.muscleGroup === group && ex.subGroup === subGroup
    ),
  [group, subGroup]);

  const toggleComplete = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progress = filteredExercises.length
    ? (completed.length / filteredExercises.length) * 100
    : 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Übungen für {subGroup}
      </Text>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {filteredExercises.map((exercise) => (
        <View key={exercise.id} style={styles.exerciseCard}>
          {exercise.image && (
            <Image source={exercise.image} style={styles.image} resizeMode="contain" />
          )}

          <View style={styles.headerRow}>
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(exercise.id)}>
              <Text style={styles.icon}>{favorites.includes(exercise.id) ? '⭐' : '☆'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sets}>
            {exercise.sets} Sätze × {exercise.reps} Wiederholungen
          </Text>

          {exercise.description && (
            <View style={styles.bulletList}>
              {exercise.description.map((point, idx) => (
                <Text key={idx} style={styles.bullet}>
                  • {point}
                </Text>
              ))}
            </View>
          )}

          <TouchableOpacity
            style={[styles.doneButton, completed.includes(exercise.id) && styles.doneActive]}
            onPress={() => toggleComplete(exercise.id)}
          >
            <Text style={styles.doneText}>
              {completed.includes(exercise.id) ? '✅ Erledigt' : 'Als erledigt markieren'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E293B',
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4ade80',
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
  },
  sets: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
    color: '#475569',
  },
  bulletList: {
    marginBottom: 16,
  },
  bullet: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 4,
  },
  doneButton: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneActive: {
    backgroundColor: '#86efac',
  },
  doneText: {
    color: '#1E293B',
    fontWeight: '500',
  },
  icon: {
    fontSize: 22,
    marginLeft: 10,
  },
});
