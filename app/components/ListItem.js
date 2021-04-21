import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from './AppText';
import colors from '../config/colors'

function ListItem({ title, subTitle, image, onPress, ImageComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.medium}
            >
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source= {image}/>}
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    }
})
export default ListItem;