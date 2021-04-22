import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}> 
            {icon && <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name={icon} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
        
    },
    icon: {
        marginRight: 10
    },
})
export default AppTextInput;