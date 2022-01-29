// Librairies
import React from 'react';

// Navigateurs
import { AppModalsNavigators } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppModalsNavigators />
    </NavigationContainer>
  );
}
