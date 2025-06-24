import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = {
  route: RouteProp<RootStackParamList, 'MuscleDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'MuscleDetail'>;
};

const subGroups: { [key: string]: string[] } = {
  Brust: ['Obere Brust', 'Untere Brust', 'Mittlere Brust'],
  Rücken: ['Oberer Rücken', 'Unterer Rücken', 'Lat'],
  Beine: ['Quadrizeps', 'Hamstrings', 'Waden'],
  Arme: ['Bizeps', 'Trizeps', 'Unterarme'],
  Schultern: ['Vordere Schulter', 'Seitliche Schulter', 'Hintere Schulter'],
  Bauch: ['Oberer Bauch', 'Unterer Bauch', 'Seitlicher Bauch'],
};

export default function MuscleDetailScreen({ route, navigation }: Props) {
  const { group } = route.params;
  const details = subGroups[group] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bereich: {group}</Text>
      <FlatList
        data={details}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ExerciseList', {
                group: group,
                subGroup: item,
              })
            }
          >
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 24,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E7FF',
    shadowColor: '#CBD5E1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: '#1E293B',
    fontWeight: '500',
  },
});
