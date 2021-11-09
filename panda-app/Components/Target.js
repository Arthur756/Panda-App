import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componentes
import ProgressBar from "./ProgressBar";

const Target = (props) => {
  const [completed, setCompleted] = useState(false);

  function changeValue(value) {
    props.changeTarget(props.id, props.color, props.title, value, props.totalTarget);
    if (value == props.totalTarget) setCompleted(true);
    else setCompleted(false);
  }

  return (
    <View style={completed ? styles.cardComplete : styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.circle, { backgroundColor: props.color }]} />
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
      <ProgressBar
        bgcolor={props.color}
        havingTarget={props.value}
        totalTarget={props.totalTarget}
        changeValue={changeValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#FFF",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    marginBottom: 25,
  },
  cardComplete: {
    flexDirection: "column",
    backgroundColor: "#EEEBEB",
    height: "auto",
    borderWidth: 3,
    borderColor: "#bbb",
    borderStyle: "dashed",
    opacity: 0.6,
    padding: 20,
    borderRadius: 25,
    marginBottom: 25,
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
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Target;
