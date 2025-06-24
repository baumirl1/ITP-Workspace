import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MuscleDetailScreen from './screens/MuscleDetailScreen';
import ExerciseListScreen from './screens/ExerciseListScreen';
import GoalScreen from './screens/GoalScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  MuscleDetail: { group: string };
  ExerciseList: { group: string; subGroup: string };
  Goal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MuscleDetail" component={MuscleDetailScreen} />
        <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
