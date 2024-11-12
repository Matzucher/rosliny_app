import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Rosliny from '../screens/rosliny';
import Kalendarz from '../screens/kalendarz';
import Choise from '../screens/n_roslina';



type RootStackParamList = {
  Rosliny: undefined;
  Kalendarz: undefined;
  Choise: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Rosliny" screenOptions={{
      animation: 'none',
    }}>
      <Stack.Screen name="Rosliny" component={Rosliny} options={{ headerShown: false }} />
      <Stack.Screen name="Kalendarz" component={Kalendarz} options={{ headerShown: false }} />
      <Stack.Screen name="Choise" component={Choise} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};



export default AppNavigator;