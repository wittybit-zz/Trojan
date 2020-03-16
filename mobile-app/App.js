import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {WebView} from 'react-native-webview';
export default function App() {
  return (
      <WebView
        source={{uri: 'https://calm-refuge-49101.herokuapp.com/'}}
        style={{marginTop: 20}}
        scalesPageToFit={false}
        
      />
  );
}



