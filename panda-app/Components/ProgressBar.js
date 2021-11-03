import React from "react";
import { View, Text } from "react-native";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    backgroundColor: "#e0e0de",
    borderRadius: 150,
    alignItems: "stretch",
    marginTop: 20,
    marginBottom: 24,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 50,
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
  };

  const values = {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  };

  const value = {
    fontSize: 15,
    fontWeight: "500",
  };

  return (
    <View style={containerStyles}>
      <View style={fillerStyles}>
        <View style={labelStyles}></View>
      </View>
      <View style={values}>
        <Text style={value}>R$ {props.havingTarget}</Text>
        <Text style={value}>R$ {props.totalTarget}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
