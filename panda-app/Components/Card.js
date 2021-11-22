import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

// Images
import card from "../assets/card.png";
import flag from "../assets/visa.png";
import eye from "../assets/eye.png";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground style={styles.card} source={card}>
        <Text style={styles.textCard1}>Saldo atual </Text>
        <Text style={styles.textCard2}>Novembro</Text>
        <Text style={styles.textCard3}>R$ 542,00</Text>

        <Text style={styles.textCard4}>Limite disponível</Text>
        <Text style={styles.textCard5}>R$ 3.600,00</Text>
        <Image style={styles.eye} source={eye} />
        <Image style={styles.flag} source={flag} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignItems: "center",
  },
  card: {
    marginTop: 10,
    overflow: "hidden",
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 30,
    width: 325,
    height: 195.37,
    shadowColor: "#2DB07188",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 35,
  },
  flag: {
    position: "absolute",
    bottom: 6,
    right: 25,
    width: 48,
    height: 48,
  },
  eye: {
    position: "absolute",
    top: 16,
    right: 25,
    width: 27,
    height: 27,
  },
  textCard1: {
    color: "white",
    fontSize: 16,
    marginLeft: 22,
    marginTop: 22,
    fontWeight: "500",
  },
  textCard2: {
    color: "white",
    fontSize: 14,
    marginLeft: 22,
    fontWeight: "300",
  },
  textCard3: {
    color: "white",
    fontSize: 32,
    // marginTop: 5,
    marginLeft: 22,
    fontWeight: "500",
  },
  textCard4: {
    color: "white",
    fontSize: 16,
    marginTop: 28,
    marginLeft: 22,
    fontWeight: "400",
  },
  textCard5: {
    color: "white",
    fontSize: 14,
    marginLeft: 22,
    fontWeight: "300",
  },
});

export default Card;
