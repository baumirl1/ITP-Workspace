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
{
  id: 'chest_dips',
  name: 'Dips',
  muscleGroup: 'Brust',
  subGroup: 'Untere Brust',
  image: require('../assets/images/dips.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Stärkt besonders die untere Brust und den Trizeps.',
    'Lehne dich leicht nach vorne, um den Fokus auf die Brust zu legen.',
    'Senke dich langsam ab, bis die Oberarme parallel zum Boden sind, und drücke dich kontrolliert hoch.',
  ],
},
{
  id: 'lat_pulldown',
  name: 'Latziehen',
  muscleGroup: 'Rücken',
  subGroup: 'Oberer Rücken',
  image: require('../assets/images/latziehen.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Zielt auf Latissimus und oberen Rückenbereich ab.',
    'Greife die Stange etwas weiter als schulterbreit.',
    'Ziehe die Stange kontrolliert zur Brust und lasse sie langsam zurück.',
  ],
},

{
  id: 'deadlift',
  name: 'Kreuzheben',
  muscleGroup: 'Rücken',
  subGroup: 'Unterer Rücken',
  image: require('../assets/images/kreuzheben.jpg'),
  sets: 3,
  reps: 8,
  description: [
    'Stärkt unteren Rücken, Gesäß und hintere Oberschenkel.',
    'Stelle dich schulterbreit vor die Langhantel.',
    'Rücken gerade halten, Hantel nah am Körper hochheben.',
  ],
},

{
  id: 'pull_ups',
  name: 'Klimmzüge',
  muscleGroup: 'Rücken',
  subGroup: 'Lat',
  image: require('../assets/images/klimmzuege.jpg'),
  sets: 3,
  reps: 8,
  description: [
    'Körpereigene Übung für den breiten Rückenmuskel.',
    'Greife die Stange etwas breiter als schulterbreit im Obergriff.',
    'Ziehe dich hoch, bis das Kinn über die Stange geht, dann langsam absenken.',
  ],
},
{
  id: 'leg_press',
  name: 'Beinpresse',
  muscleGroup: 'Beine',
  subGroup: 'Quadrizeps',
  image: require('../assets/images/beinpresse.jpg'),
  sets: 4,
  reps: 12,
  description: [
    'Kräftigt vor allem den Quadrizeps, aber auch Gesäß und Beinbeuger.',
    'Setze dich in die Maschine mit Rücken an der Lehne und Füßen schulterbreit auf der Platte.',
    'Drücke das Gewicht kontrolliert nach oben, ohne die Knie komplett durchzustrecken.',
    'Lass das Gewicht langsam zurück, bis die Knie etwa 90° beugen.',
  ],
},
{
  id: 'leg_curl',
  name: 'Beinbeuger-Maschine (Leg Curl)',
  muscleGroup: 'Beine',
  subGroup: 'Hamstrings',
  image: require('../assets/images/legcurl.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Isoliert die hintere Oberschenkelmuskulatur.',
    'Lege dich bäuchlings auf die Maschine, Fersen unter die Polsterrolle.',
    'Beuge die Beine kontrolliert nach oben, ohne Schwung.',
    'Senke die Beine langsam wieder ab, ohne komplett abzulegen.',
  ],
},

{
  id: 'calf_raise',
  name: 'Wadenheben (Calf Raises)',
  muscleGroup: 'Beine',
  subGroup: 'Waden',
  image: require('../assets/images/wadenheben.jpg'),
  sets: 3,
  reps: 15,
  description: [
    'Trainiert die Wadenmuskulatur (Gastrocnemius und Soleus).',
    'Stelle dich auf eine Erhöhung (z. B. Stufe), Fersen hängen leicht über den Rand.',
    'Hebe die Fersen so weit wie möglich an und spanne die Waden oben kurz an.',
    'Senke langsam ab, bis die Fersen unter die Stufenhöhe sinken.',
  ],
},

{
  id: 'bizepscurls',
  name: 'Bizepscurls mit Kurzhanteln',
  muscleGroup: 'Arme',
  subGroup: 'Bizeps',
  image: require('../assets/images/bizepscurls.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Isoliert den Bizeps-Muskel.',
    'Halte die Kurzhanteln im Untergriff, Arme am Körper fixiert.',
    'Hebe die Hanteln kontrolliert nach oben und spanne den Bizeps oben an.',
    'Senke langsam ab, ohne zu schwingen.',
  ],
},
{
  id: 'trizepsdruecken',
  name: 'Trizepsdrücken am Kabelzug',
  muscleGroup: 'Arme',
  subGroup: 'Trizeps',
  image: require('../assets/images/trizepsdruecken.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Trainiert gezielt den Trizeps.',
    'Greife das Seil am Kabelzug im Obergriff.',
    'Drücke das Seil nach unten, bis die Arme gestreckt sind.',
    'Kontrolliert zurückführen, ohne Schultern zu bewegen.',
  ],
},

{
  id: 'handgelenkcurls',
  name: 'Handgelenkcurls mit Kurzhanteln',
  muscleGroup: 'Arme',
  subGroup: 'Unterarme',
  image: require('../assets/images/handgelenkcurls.jpg'),
  sets: 3,
  reps: 15,
  description: [
    'Zielt auf die Flexoren der Unterarme.',
    'Setze dich, Unterarme auf den Oberschenkeln abgelegt, Handflächen nach oben.',
    'Rolle die Kurzhanteln nur mit den Handgelenken nach oben.',
    'Senke langsam ab für maximale Dehnung.',
  ],
},

{
  id: 'frontheben',
  name: 'Frontheben mit Kurzhanteln',
  muscleGroup: 'Schultern',
  subGroup: 'Vordere Schulter',
  image: require('../assets/images/frontheben.jpg'),
  sets: 3,
  reps: 10,
  description: [
    'Trainiert gezielt den vorderen Teil des Deltamuskels.',
    'Halte die Kurzhanteln vor den Oberschenkeln mit neutralem Griff.',
    'Hebe die Arme gestreckt bis auf Schulterhöhe.',
    'Langsam absenken – vermeide Schwung aus dem Rücken.',
  ],
},
{
  id: 'seitheben',
  name: 'Seitheben mit Kurzhanteln',
  muscleGroup: 'Schultern',
  subGroup: 'Seitliche Schulter',
  image: require('../assets/images/seitheben.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Trainiert die seitliche Schultermuskulatur.',
    'Halte Kurzhanteln seitlich neben dem Körper.',
    'Hebe die Arme seitlich an, bis sie auf Schulterhöhe sind.',
    'Langsam und kontrolliert wieder absenken.',
  ],
},

{
  id: 'reverse_flys',
  name: 'Reverse Flys mit Kurzhanteln',
  muscleGroup: 'Schultern',
  subGroup: 'Hintere Schulter',
  image: require('../assets/images/reverseflys.jpg'),
  sets: 3,
  reps: 12,
  description: [
    'Zielt auf die hintere Schulter und oberen Rücken.',
    'Beuge den Oberkörper leicht nach vorne, Rücken gerade.',
    'Hebe die Arme seitlich an, Ellbogen leicht gebeugt.',
    'Oben kurz halten, dann langsam senken.',
  ],
},
{
  id: 'crunches',
  name: 'Crunches',
  muscleGroup: 'Bauch',
  subGroup: 'Oberer Bauch',
  image: require('../assets/images/crunches.jpg'),
  sets: 3,
  reps: 20,
  description: [
    'Isoliert den oberen Teil der Bauchmuskulatur.',
    'Lege dich auf den Rücken, Beine angewinkelt.',
    'Hebe Oberkörper leicht an, ohne Schwung.',
    'Kontrolliert absenken, Spannung halten.',
  ],
},
{
  id: 'seitliche_crunches',
  name: 'Seitliche Crunches',
  muscleGroup: 'Bauch',
  subGroup: 'Seitlicher Bauch',
  image: require('../assets/images/seitliche_crunches.jpg'),
  sets: 3,
  reps: 15,
  description: [
    'Trainiert die schrägen Bauchmuskeln.',
    'Lege dich auf den Rücken, ein Bein über das andere.',
    'Berühre mit dem Ellbogen das gegenüberliegende Knie.',
    'Langsame, kontrollierte Bewegung – beide Seiten trainieren.',
  ],
},
{
  id: 'beinheben',
  name: 'Beinheben',
  muscleGroup: 'Bauch',
  subGroup: 'Unterer Bauch',
  image: require('../assets/images/beinheben.jpg'),
  sets: 3,
  reps: 15,
  description: [
    'Fokus auf den unteren Bauchbereich.',
    'Lege dich flach auf den Rücken, Arme neben dem Körper.',
    'Hebe gestreckte Beine langsam bis 90° an.',
    'Langsam wieder absenken, ohne den Boden zu berühren.',
  ],
},

];
