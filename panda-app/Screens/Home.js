import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

//Icons
import Icon from "react-native-vector-icons/MaterialIcons";

// Components
import Card from "../Components/Card";
import ProfileIcon from "../Components/ProfileIcon";
import Tabs from "../Components/Tabs.js";

// Images
import backgroundImage from "../assets/menu-background.png";

const Home = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.header}>
          <ProfileIcon navigation={navigation} />
          <Text style={styles.headerText}>Olá,</Text>
          <Text style={styles.headerTitle}>Ana Chaves</Text>
        </View>
        <Card />
        <Tabs navigation={navigation} />
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  header: {
    padding: 25,
    paddingTop: 50,
    height: 140,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: -10,
  },

});

export default Home;
