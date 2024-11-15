import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PlantsContext, PlantsProvider } from './src/components/RoslinyContext';

// if ('serviceWorker' in navigator) {
// 	// Register a service worker hosted at the root of the
// 	// site using the default scope.
// 	navigator.serviceWorker.register(`./app/service-worker.js`).then(
// 	  registration => {
// 		 console.log('Service worker registration succeeded:', registration);
// 	  },
// 	  /*catch*/ error => {
// 		 console.error(`Service worker registration failed: ${error}`);
// 	  }
// 	);
// } else {
// 	console.error('Service workers are not supported.');
// }

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