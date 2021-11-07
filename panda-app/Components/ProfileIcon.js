import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

const ProfileIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.profileIcon}
      onPress={() => navigation.navigate("Profile")}
      source={require("../assets/perfil1.jpg")}
    >
      <Image style={styles.profile} source={require("../assets/perfil1.jpg")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    position: "absolute",
    right: 28,
    top: 35,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },
});
export default ProfileIcon;
