import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";

// Images
import background from "../assets/profile-background.png";
import wave from "../assets/profile-wave.png";

const Profile = ({ navigation }) => {
  const [completed, setCompleted] = useState(35);

  const progressConteiner = {
    marginVertical: "auto",
    height: 16,
    color: "#fff",
    borderRadius: 100,
    backgroundColor: "#1C6843",
  };
  const progressFilled = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#37F198",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "end",
  };
  const progressPercent = {
    marginTop: 32,
    fontSize: 12,
    color: "#fff",
  };

  return (
    <View style={styles.main}>
      <Image source={wave} style={styles.wave}></Image>
      <Image source={background} style={styles.background}></Image>
      <View style={styles.profileConteiner}>
        <Image
          style={styles.profile}
          source={require("../assets/perfil1.jpg")}
        ></Image>
      </View>
      <View style={styles.textConteiner}>
        <Text style={styles.text1}>Ana Chaves</Text>
        <Text style={styles.text2}>anachaves282@gmail.com</Text>
      </View>
      <View style={styles.completeRegister}>
        <View style={styles.headerRegister}>
          <Text style={styles.text4}>Quase lá!</Text>
          <Text style={styles.text5}>Complete seu perfil</Text>
        </View>
        <View style={progressConteiner}>
          <View style={progressFilled}>
            <Text style={progressPercent}>{completed}%</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.completeBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text6}>Completar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text3}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#070707",
    alignItems: "center",
    // width: "100%",
    height: "100%",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 126,
    height: 110,
  },
  profileConteiner: {
    backgroundColor: "#FFF",
    width: 200,
    height: 200,
    borderRadius: 250,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 40,
  },
  profile: {
    width: 180,
    height: 180,
    borderRadius: 250,
  },
  textConteiner: {
    alignItems: "center",
    marginTop: 20,
  },
  text1: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 600,
  },
  text2: {
    color: "#ffffff99",
    fontSize: 18,
    fontWeight: 300,
  },
  text3: {
    color: "#000",
    fontSize: 20,
    fontWeight: 700,
  },
  text4: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 600,
  },
  text5: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 400,
  },
  text6: {
    color: "#000",
    fontSize: 16,
    fontWeight: 600,
  },
  completeRegister: {
    backgroundColor: "#179E5D",
    width: "75%",
    height: 185,
    borderRadius: 18,
    marginVertical: "auto",
    paddingVertical: 16,
    paddingHorizontal: 22,
  },
  headerRegister: {},
  logoutBtn: {
    backgroundColor: "#fff",
    width: "75%",
    height: 60,
    borderRadius: 18,
    marginTop: "auto",
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 5,
  },
  completeBtn: {
    backgroundColor: "#fff",
    width: "100%",
    height: 35,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    borderBottomColor: "#ddd",
    borderBottomWidth: 4,
  },
});

export default Profile;
