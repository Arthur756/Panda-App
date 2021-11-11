import React from "react";
import { View, StyleSheet } from "react-native";

import ProfileIcon from "../Components/ProfileIcon";

const Reports = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: 200,
    borderBottomEndRadius: 45,
    borderBottomLeftRadius: 45,
  }
})

export default Reports;
