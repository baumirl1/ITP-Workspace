import PushNotification from 'react-native-push-notification';

export const scheduleWorkoutReminder = () => {
  PushNotification.cancelAllLocalNotifications();

  const now = new Date();
  const reminderTime = new Date();
  reminderTime.setHours(19);
  reminderTime.setMinutes(0);
  reminderTime.setSeconds(0);

  if (reminderTime < now) {
    reminderTime.setDate(reminderTime.getDate() + 1);
  }

  PushNotification.localNotificationSchedule({
    message: '💪 Zeit für dein Training! Jetzt durchziehen!',
    date: reminderTime,
    repeatType: 'day',
    allowWhileIdle: true,
    channelId: 'fitness-channel',
  });
};
