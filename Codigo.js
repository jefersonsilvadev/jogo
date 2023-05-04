import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {

    const [permission, requestPermission] = Camera.useCameraPermissions();

    console.log(permission);

    return (
        <View style={styles.container}>
            <Text>lalalal ala l</Text>
            <Button title="Abrir Camera" onPress={requestPermission} />
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
        width: 300,
        height: 300
    }
});