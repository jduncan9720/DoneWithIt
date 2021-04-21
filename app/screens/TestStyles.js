import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from "../components/AppText"


export default function TestStyles() {
    return (

    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <View style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
            borderColor: "green",
            borderWidth: 10,
            borderRadius: 50,
            shadowColor: "grey",
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 20, //for android

        }}>
            <View style={{
                backgroundColor: "gold",
                height: 50,
                width: 50,
                borderRadius: 25,
                marginTop: 15,
                marginLeft: 15,

            }}>
            </View>
        </View>
        <AppText>I Love React Native. This is my first React Native app.
            <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
        </AppText>
        
    </View>
        


    )
}

const styles = StyleSheet.create({})

