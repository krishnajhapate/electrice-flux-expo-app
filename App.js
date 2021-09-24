import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screens from './screens';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
