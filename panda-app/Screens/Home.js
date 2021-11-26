import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
} from "react-native";

// Components
import Card from "../Components/Card";
import ProfileIcon from "../Components/ProfileIcon";
import Tabs from "../Components/Tabs.js";

const Home = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(false);

  const fadeText = useRef(new Animated.Value(0)).current;
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(500)).current;

  useEffect(() =>
    Animated.timing(fadeText, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true
    }).start(),
    Animated.timing(fadeTitle, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: true
    }).start(),
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  );

  return (
    <ScrollView style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Animated.View style={[styles.background, {transform: [{ translateY: animatedValue }]}]}></Animated.View>
      <View style={styles.header}>
        <ProfileIcon navigation={navigation} />
        <Animated.Text style={[styles.headerText, { opacity: fadeText }]}>
          Olá,
        </Animated.Text>
        <Animated.Text style={[styles.headerTitle, { opacity: fadeTitle }]}>
          Ana Chaves
        </Animated.Text>
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
    marginTop: 0,
  },
});

export default Home;
