import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componentes
import ProgressBar from "./ProgressBar";

const Target = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.circle, { backgroundColor: props.color }]} />
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
      <ProgressBar
        bgcolor={props.color}
        havingTarget={value}
        totalTarget={props.totalTarget}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#EEEBEB",
    height: "auto",
    padding: 24,
    borderRadius: 30,
    marginBottom: 30,
  },
  circle: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 40,
  },

  textTitle: {
    marginLeft: 28,
    fontWeight: "400",
    fontSize: 18,
  },
});

export default Target;
