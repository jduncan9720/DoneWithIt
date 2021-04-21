import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({ 
    button: {
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'


    }

})
export default AppButton;
