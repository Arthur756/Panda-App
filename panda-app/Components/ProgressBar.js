import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Bibliotecas
import Slider from "@react-native-community/slider";

const ProgressBar = (props) => {
  const [value, setValue] = useState(props.havingTarget);
  
  function _changeValue() {
    props.changeValue(value);
  }

  return (
    <View>
      <Slider
        style={styles.targetSlider}
        minimumValue={0}
        maximumValue={props.totalTarget}
        thumbTintColor={props.bgcolor}
        minimumTrackTintColor={props.bgcolor}
        maximumTrackTintColor="#ddd"
        value={value}
        onValueChange={(value)=> setValue(value)}
        onSlidingComplete={_changeValue}
      />
      <View style={styles.targetContainer}>
        <Text style={styles.havingTarget}>
          R$ {parseFloat(value).toFixed(2)}
        </Text>
        <Text style={styles.targetValue}>
          R$ {parseFloat(props.totalTarget).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  targetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  targetValue: {
    fontSize: 15,
    fontWeight: "500",
  },
  targetSlider: {
    marginTop: 15,
    width: "100%",
  },
  havingTarget: {
    color: "#03773f",
    fontSize: 15,
    fontWeight: "500",
  },
});

// const containerStyles = {
//   height: 10,
//   backgroundColor: "#e0e0de",
//   borderRadius: 150,
//   alignItems: "stretch",
//   marginTop: 20,
//   marginBottom: 24,
// };

// const fillerStyles = {
//   height: "100%",
//   width: `${completed}%`,
//   backgroundColor: bgcolor,
//   borderRadius: 50,
//   textAlign: "right",
// };

// const labelStyles = {
//   padding: 5,
//   color: "white",
// };

export default ProgressBar;
