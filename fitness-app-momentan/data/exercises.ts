// data/exercises.ts

export type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  subGroup?: string;
  image?: any;
  sets?: number;
  reps?: number;
  description?: string[];
};

export const EXERCISES: Exercise[] = [
  {
    id: 'bench_press',
    name: 'Bankdrücken',
    muscleGroup: 'Brust',
    subGroup: 'Mittlere Brust',
    image: require('../assets/images/bankdruecken.jpg'),
    sets: 3,
    reps: 10,
    description: [
      'Stärkt die mittlere Brustmuskulatur.',
      'Nutze eine Flachbank mit sicherem Griff.',
      'Langhantel langsam zur Brust senken und kontrolliert drücken.',
    ],
  },
  {
    id: 'push_ups',
    name: 'Liegestütze',
    muscleGroup: 'Brust',
    subGroup: 'Mittlere Brust',
    image: require('../assets/images/liegestuetze.jpg'),
    sets: 3,
    reps: 15,
    description: [
      'Trainiert Brust, Schultern und Trizeps.',
      'Halte Körper stabil und Rücken gerade.',
      'Senke dich langsam ab und drücke dich explosiv hoch.',
    ],
  },
  {
    id: 'incline_press',
    name: 'Schrägbankdrücken',
    muscleGroup: 'Brust',
    subGroup: 'Obere Brust',
    image: require('../assets/images/schraegbankdruecken_langhantel.jpg'),
    sets: 3,
    reps: 10,
    description: [
      'Stelle die Bank auf etwa 30–45° Neigung.',
      'Greife etwas breiter als schulterbreit.',
      'Führe die Stange zur oberen Brust und drücke sie wieder hoch.',
    ],
  },
];
