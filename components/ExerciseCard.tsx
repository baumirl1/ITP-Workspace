import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import type { Exercise } from '../data/exercises';

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <View style={styles.card}>
      {exercise.image && (
        <Image source={exercise.image} style={styles.image} resizeMode="contain" />
      )}

      <Text style={styles.name}>{exercise.name}</Text>

      {exercise.sets && exercise.reps && (
        <Text style={styles.sets}>
          {exercise.sets} Sätze × {exercise.reps} Wiederholungen
        </Text>
      )}

      <View style={styles.bulletList}>
        {exercise.description?.map((point, index) => (
          <Text key={index} style={styles.bullet}>
            • {point}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E7FF',
    shadowColor: '#CBD5E1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 6,
  },
  sets: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 10,
  },
  bulletList: {
    gap: 4,
  },
  bullet: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 4,
  },
});
