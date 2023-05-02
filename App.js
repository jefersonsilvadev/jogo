import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();


  return (
    <View style={styles.container}>
      <Text>Hello Worlddddddd!</Text>
      <Button title='Abrir Camera' onPress={requestPermission}/>
      <Camera style={styles.camera} type={CameraType.back}></Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '40%',
  }
 
});
