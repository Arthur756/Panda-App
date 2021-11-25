import React, { useRef, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Animated,
} from "react-native";

const ProfileIcon = ({ navigation }) => {
  const fadeProfile = useRef(new Animated.Value(0)).current;

  useEffect(() =>
    Animated.timing(fadeProfile, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  );

  return (
    <Animated.View style={[styles.profileIcon, { opacity: fadeProfile }]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        source={require("../assets/perfil1.jpg")}
      >
        <Image
          style={styles.profile}
          source={require("../assets/perfil1.jpg")}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    position: "absolute",
    right: 28,
    top: 35,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    overflow: "hidden",
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
export default ProfileIcon;
