import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}>
            <View style={styles.head}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title="Login" color="primary" onPress={() => console.log("Login Pressed")}/>  
            <AppButton title="Register" color="secondary" onPress={() => console.log("Register Pressed")}/>  
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        position: "absolute",
        top: 200
    },
    head: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

export default WelcomeScreen;