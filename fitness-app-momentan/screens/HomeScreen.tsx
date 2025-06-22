import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Platform,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const muscleGroups = [
  { name: 'Brust', emoji: '🫀' },
  { name: 'Rücken', emoji: '🎒' },
  { name: 'Beine', emoji: '🦵' },
  { name: 'Arme', emoji: '💪' },
  { name: 'Schultern', emoji: '🧍' },
  { name: 'Bauch', emoji: '🧘' },
];

const motivationByDay: Record<number, string> = {
  0: '🧘 Sonntag ist Regeneration – gönn dir Ruhe!',
  1: '💪 Montag: Starte stark in die Woche!',
  2: '🔥 Dienstag: Kein Schmerz, kein Fortschritt!',
  3: '🏋️ Mittwoch ist Bergfest – bleib dran!',
  4: '🚀 Donnerstag: Push deine Limits!',
  5: '🏆 Freitag: Finish strong!',
  6: '🎯 Samstag: Ziel nicht vergessen – trainier smart!',
};

export default function HomeScreen({ navigation }: Props) {
  const [showEveningReminder, setShowEveningReminder] = useState(false);

  useEffect(() => {
    const now = new Date();
    const is19 = now.getHours() === 19;

    if (is19) {
      setShowEveningReminder(true);

      const timeout = setTimeout(() => {
        setShowEveningReminder(false);
      }, 10 * 60 * 1000); // 10 Minuten in ms

      return () => clearTimeout(timeout);
    }
  }, []);

  const currentDay = new Date().getDay();
  const motivation = motivationByDay[currentDay];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4" />

      <Text style={styles.title}>Muskelgruppen</Text>

      <View style={styles.motivationBox}>
        <Text style={styles.motivationText}>{motivation}</Text>
      </View>
      {showEveningReminder && (
        <View style={styles.reminderBox}>
          <Text style={styles.reminderText}>
            ⏰ Zeit für dein Workout Chef 💪
          </Text>
        </View>
      )}

      <FlatList
        data={muscleGroups}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <MuscleCard
            item={item}
            onPress={() => navigation.navigate('MuscleDetail', { group: item.name })}
          />
        )}
      />
    </View>
  );
}

const MuscleCard = ({ item, onPress }: { item: any; onPress: () => void }) => {
  const scaleAnim = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start(() => onPress());
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.card}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={styles.cardContent}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 20,
    letterSpacing: 0.8,
  },
  motivationBox: {
    backgroundColor: '#E0F2FE',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  motivationText: {
    color: '#0369A1',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  reminderBox: {
    backgroundColor: '#FEF3C7',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  reminderText: {
    color: '#92400E',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E7FF',
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    marginRight: 14,
  },
  cardText: {
    fontSize: 20,
    color: '#1E293B',
    fontWeight: '600',
  },
});
