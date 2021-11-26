import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

// Bibliotecas
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBarTarget = (props) => {
  const conteiner = {
    width: `${props.width}%`,
    height: 35,
    flexDirection: "row",
  };
  
  return (
    <View style={conteiner}>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Icon name="search" size={18} color={"#fff"}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    fontWeight: "600",
    backgroundColor: "white",
    width: "85%",
    height: "100%",
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  button: {
    backgroundColor: "#1C6843",
    width: "15%",
    height: "100%",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchBarTarget;
