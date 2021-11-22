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
    <View style={completed ? styles.targetComplete : styles.target}>
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
  target: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#FFF",
    height: "auto",
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 25,
  },
  targetComplete: {
    flexDirection: "column",
    backgroundColor: "#EEEBEB",
    height: "auto",
    borderWidth: 3,
    borderColor: "#bbb",
    borderStyle: "dashed",
    opacity: 0.6,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
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
    marginLeft: 20,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Target;
