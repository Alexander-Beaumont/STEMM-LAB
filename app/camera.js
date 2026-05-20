import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import "./global.js"


export default class Camera {
    constructor() {
        this.goTo = '/';
        this.saveVar = global.videos;
    }
    setLink(address) {
        this.goTo = address;
    }
    setSaveVar(save) {
        this.saveVar = save;
    }
    getCode() { 
        const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
        const [hasPermission, requestPermission] = useCameraPermissions();
        const [cameraReady, setCameraReady] = useState(false);
        const cameraRef = useRef(null);

        const [recording, setRecording] = useState(false);
        const styles = StyleSheet.create({
            container: {
                paddingTop: Platform.OS === 'android' ? 40 : 80,
                paddingBottom: Platform.OS === 'android' ? 40 : 80,
                justifyContent: 'center',
                backgroundColor: '#000',
            },
            camera: {
                height:"100%",
            },
            buttons: {
                backgroundColor: '#3eb8f1',
                paddingVertical: 14,
                width: "100%",
                borderRadius: 6,
                bottom: 50,
                alignSelf: 'center',
                position:"absolute",
            },
            backButtonText: {
                color: '#fff',
                textAlign: 'center',
                fontWeight: '600',
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
            this.saveVar[0] = myRecording
            router.push(this.goTo)
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
                <TouchableOpacity style={styles.buttons} onPress={stopRecord} >
                    <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Stop Recording</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttons} onPress={record} disabled={!cameraReady} >
                    <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Record Video</Text>
                </TouchableOpacity>
            )}
            </View>
        );
    }
}

