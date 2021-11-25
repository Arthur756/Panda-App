import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componentes
import ProgressBar from "./ProgressBar";

const Target = (props) => {
  const [completed, setCompleted] = useState(false);

  function changeValue(value) {
    props.changeTarget(
      props.id,
      props.color,
      props.title,
      value,
      props.totalTarget
    );
    if (value == props.totalTarget) setCompleted(true);
    else setCompleted(false);
  }

  useEffect(() => {
    if (props.value == props.totalTarget) setCompleted(true);
  });

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
    // borderWidth: 3,
    // borderColor: "#FFF",
    height: "auto",
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: "#222",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    overflow: "hidden",
  },
  targetComplete: {
    flexDirection: "column",
    backgroundColor: "#EEEBEB",
    height: "auto",
    // borderWidth: 3,
    // borderColor: "#bbb",
    // borderStyle: "dashed",
    opacity: 0.6,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    borderRadius: 500,
    top: -100,
    left: -100,
    width: 150,
    height: 150,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 40,
  },

  textTitle: {
    marginLeft: 65,
    marginBottom: 15,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Target;
