import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screens from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { store } from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>

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

