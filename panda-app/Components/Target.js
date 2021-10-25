import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Target = (props) => {
    return (
        <View style={styles.card}>
            <View style={[styles.circle, {backgroundColor: props.color }]} />
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EEEBEB',
        height: '10rem',
        borderRadius: '1.5rem',
        marginBottom: '1.8rem',
    },
    circle: {
        borderRadius: '15rem',
        width: '3rem',
        height: '3rem',
        top: '2rem',
        left: '2rem'
    },

})

export default Target;