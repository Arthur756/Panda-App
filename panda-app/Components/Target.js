import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProgressBar from "./ProgressBar";

const Target = (props) => {
    const [ value, setValue ] =  useState(props.value);
    
    const totalTarget = props.totalTarget;

    const completed = (value * 100) / totalTarget

    return (
        <View style={styles.card}>
            <View style={[styles.circle, {backgroundColor: props.color }]} />
            <View style={styles.cardText}>
                <Text style={styles.textTitle}>{props.title}</Text>
            </View>
            <ProgressBar bgcolor={props.color} completed={completed} havingTarget={value} totalTarget={totalTarget}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'column',
        backgroundColor: '#EEEBEB',
        height: '10rem',
        borderRadius: '1.5rem',
        marginBottom: '1.8rem',

    },
    circle: {
        position: 'absolute',
        borderRadius: '15rem',
        width: '3rem',
        height: '3rem',
        top: '2rem',
        left: '2rem'
    },

    cardText: {
        marginLeft: '7rem',
        marginTop: '2.5rem',
    },

    textTitle: {
        fontSize: '1.3rem'
    }

})

export default Target;