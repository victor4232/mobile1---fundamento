//import { StatusBar } from 'expo-status-bar';
//import { Fragment } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { StatusBar, View } from 'react-native';

//import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>


     
  );
}

