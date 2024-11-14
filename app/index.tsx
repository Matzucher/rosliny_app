import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PlantsContext, PlantsProvider } from './src/components/RoslinyContext';

const App: React.FC = () => {
    return (
        <PlantsProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </PlantsProvider>
    );
};

export default App;