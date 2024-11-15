// import React, { useEffect, useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';

// const App = () => {
//     const [expoPushToken, setExpoPushToken] = useState<string>('');
//     const [notification, setNotification] = useState<any>(null);

//     // Request notification permissions
//     useEffect(() => {
//         const requestPermissions = async () => {
//             const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//             if (status === 'granted') {
//                 const token = await Notifications.getExpoPushTokenAsync();
//                 setExpoPushToken(token.data);
//             } else {
//                 console.log('Notification permission denied');
//             }
//         };

//         requestPermissions();

//         // Add background notification listener
//         const backgroundListener = Notifications.addNotificationResponseReceivedListener(response => {
//             console.log('Notification tapped in background:', response);
//             // Handle background notification data
//         });

//         const foregroundListener = Notifications.addNotificationReceivedListener(notification => {
//             console.log('Notification received in foreground:', notification);
//             setNotification(notification);
//         });

//         return () => {
//             // Clean up listeners
//             backgroundListener.remove();
//             foregroundListener.remove();
//         };
//     }, []);

//     // Example to send a notification
//     const sendPushNotification = async () => {
//         const message = {
//             to: expoPushToken,
//             sound: 'default',
//             title: 'Test Push Notification',
//             body: 'This is a test push notification.',
//             data: { someData: 'value' },
//         };

//         await fetch('https://exp.host/--/api/v2/push/send', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(message),
//         });
//     };

//     return (
//         <View>
//             <Text>Your Expo Push Token: {expoPushToken}</Text>
//             <Button title="Send Notification" onPress={sendPushNotification} />
//             <Text>Notification Received: {notification ? notification.request.content.body : 'None'}</Text>
//         </View>
//     );
// };

// export default App;




//Still work in progress
