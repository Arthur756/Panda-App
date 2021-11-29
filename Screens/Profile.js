import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from "react-native";

// Bibliotecas
import Icon from "react-native-vector-icons/FontAwesome";

// Images
import background from "../assets/profile-background.png";
import wave from "../assets/profile-wave.png";

// Componentes
import FieldTextInput from "../Components/FieldTextInput";

const Profile = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height * 0.17;

  const [completed, setCompleted] = useState(35);
  const [modalVisible, setModalVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(500)).current;
  const fadeProfile = useRef(new Animated.Value(0)).current;
  useEffect(
    () =>
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start(),
    Animated.timing(fadeProfile, {
      toValue: 1,
      delay: 600,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  );

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        backdropTransitionOutTiming={2}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times" size={20} color={"#fff"}></Icon>
            </TouchableOpacity>
            <Text style={styles.modalTxtTitle}>Meus Dados</Text>
            <FieldTextInput field={"Nome"} value={"Ana Chaves"} />
            <FieldTextInput field={"Email"} value={" anachaves@gmail.com"} />
            <FieldTextInput field={"Data de nascimento"} value={""} />
            <FieldTextInput field={"Sexo"} value={"Feminino"} />
            <FieldTextInput field={"Telefone"} value={""} />
            <FieldTextInput field={"CPF"} value={"12345678910"} />
            <TouchableOpacity
              style={styles.modalSave}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalSaveTxt}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Image source={wave} style={styles.wave}></Image>
      <Animated.Image
        source={background}
        style={[
          styles.background,
          { transform: [{ translateY: animatedValue }] },
        ]}
      ></Animated.Image>
      <Animated.View style={[styles.conteiner, { opacity: fadeProfile }]}>
        <View style={[styles.profileConteiner, { marginTop: screenHeight }]}>
          <Image
            style={styles.profile}
            source={require("../assets/perfil1.jpg")}
          ></Image>
        </View>
        <View style={styles.textConteiner}>
          <Text style={styles.text1}>Ana Chaves</Text>
          <Text style={styles.text2}>anachaves@gmail.com</Text>
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
            onPress={() => setModalVisible(true)}
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
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Modal //
  modal: {
    // backgroundColor: "#00000088",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: 700,
    marginTop: 260,
    backgroundColor: "#1A1A1A",
    borderRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 10,
  },
  modalClose: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 2,
  },
  modalTxtTitle: {
    fontSize: 24,
    color: "#FFF",
    marginBottom: 15,
  },
  modalSave: {
    marginTop: "auto",
    marginBottom: 75,
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalSaveTxt: {
    fontSize: 20,
    fontWeight: "500",
  },

  // Main //
  main: {
    backgroundColor: "#070707",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  conteiner: {
    width: "100%",
    alignItems: "center",
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
    fontWeight: "600",
  },
  text2: {
    color: "#ffffff99",
    fontSize: 18,
    fontWeight: "300",
  },
  text3: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
  text4: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
  text5: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
  text6: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
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
