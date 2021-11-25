import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// Bibliotecas
import Icon from "react-native-vector-icons/FontAwesome";

const FieldTextInput = (props) => {
    const [isCompleted, setCompled] = useState(false);
    const [fieldValue, setFieldValue] = useState(props.value);

    function changeValue (event) {
        if (event !== '') setFieldValue(event.target.value);
        if (fieldValue.length > 2) {
            setCompled(true);
        } else {
            setCompled(false);
        }
    }

    useEffect(()=> changeValue(''));

    const icon = (
        <Icon style={styles.icon}name="check-circle" size={18} color={"#179E5D"} />
    )
    return(
        <View style={styles.conteiner}>
            <Text style={styles.label}>{props.field}</Text>
            <TextInput style={styles.textInput} value={fieldValue} onChange={changeValue}></TextInput>
            {isCompleted ? icon : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        marginTop: 20,
        width: "100%",
        height: 50,
    },
    label: {
        fontWeight: "400",
        color: "#BBB"
    },
    textInput: {
        fontWeight: "500",
        height: "100%",
        borderBottomWidth: 2,
        borderBottomColor: "#333",
        color: "#FFF",
    },
    icon: {
        position: "absolute",
        right: 0,
        top: 25,
    }
})

export default FieldTextInput;
