import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import "../global.js"


export default class Camera {
    getCode() { 
        const [hasPermission, requestPermission] = useCameraPermissions();
        const [cameraReady, setCameraReady] = useState(false);
        const cameraRef = useRef(null);

        const [recording, setRecording] = useState(false);
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                paddingTop: Platform.OS === 'android' ? 40 : 80,
                paddingBottom: Platform.OS === 'android' ? 40 : 80,
                justifyContent: 'center',
                backgroundColor: '#000',
            },
            camera: {
                flex: 1,
            },
            preview: {
                flex: 1,
            },
            });


        if (!hasPermission) {
            return <View />;
        }

        if (!hasPermission.granted) {
            return (
            <View style={styles.container}>
                <Text>Camera access is required.</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
            );
        }

        const record = async () => {
            if (cameraRef.current && cameraReady && !recording) {
            setRecording(true)
            let myRecording = await cameraRef.current.recordAsync();
            if (!myRecording) {
                console.log(myRecording)
                return
            }
            global.uri = myRecording;
            router.push("/activity1.6")
            }
        };
        
        const stopRecord = () => {
            if (cameraRef.current && recording) {
            cameraRef.current.stopRecording()
            setRecording(false)
            }
        };
        
        return (
            <View style={styles.container}>
                <CameraView
                style={styles.camera}
                ref={cameraRef}
                onCameraReady={() => setCameraReady(true)}
                facing={"back"} 
                mute
                mode='video'
                responsiveOrientationWhenOrientationLocked={true}
                />
            {recording ? (
                <>
                <Button title="Stop Recording" onPress={stopRecord} />
                </>
            ) : (
                <>
                <Button title="record" onPress={record} disabled={!cameraReady} />
                </>
            )}
            </View>
        );
    }
}

