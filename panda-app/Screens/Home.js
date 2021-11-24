import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, StatusBar, Image } from "react-native";

// Components
import Card from "../Components/Card";
import ProfileIcon from "../Components/ProfileIcon";
import Tabs from "../Components/Tabs.js";

const Home = ({ navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={styles.background}></View>
      <View style={styles.header}>
        <ProfileIcon navigation={navigation} />
        <Text style={styles.headerText}>Olá,</Text>
        <Text style={styles.headerTitle}>Ana Chaves</Text>
      </View>
      <Card />
      <Tabs navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },
  background: {
    position: "absolute",
    backgroundColor: "black",
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    width: "100%",
    height: 600,
    marginTop: 240,
    flex: 1,
  },
  header: {
    padding: 25,
    paddingTop: 50,
    height: 140,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 0,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: -10,
  },
});

export default Home;
