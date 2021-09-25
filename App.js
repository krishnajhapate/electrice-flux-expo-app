import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screens from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import firebase from 'firebase'
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUERMENT_ID,
// } from '@env'

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUERMENT_ID
// };
// console.log(firebaseConfig)

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

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

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
