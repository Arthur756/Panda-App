import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Bibliotecas
import SwitchSelector from "react-native-switch-selector";
import Icon from "react-native-vector-icons/FontAwesome";

// Componentes
import ProgressRing from "../Components/ProgressRing";
const Reports = () => {

  // Configuração do Switch
  const options = [
    { label: "DIA", value: "1" },
    { label: "SEMANA", value: "2" },
    { label: "MÊS", value: "3" },
  ];
  // Fim

  return (
    <View style={styles.main}>
      <View style={styles.upConteiner}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBtn}>
            <Icon name="chevron-left" size={12} color={"#fff"} />
          </TouchableOpacity>
          <Text style={styles.month}>NOVEMBRO</Text>
          <TouchableOpacity style={styles.arrowBtn}>
            <Icon name="chevron-right" size={12} color={"#fff"} />
          </TouchableOpacity>
        </View>

        <ProgressRing style={styles.progressRing} />
      </View>
      <View style={styles.midConteiner}>
        <SwitchSelector
          options={options}
          initial={0}
          buttonColor={"#fff"}
          backgroundColor={"#DDDDDD"}
          textColor={"#434343"}
          selectedColor={"#000"}
          fontSize={14}
          animationDuration={120}
          onPress={(value) => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
      <View style={styles.downConteiner}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F1F1F1",
    width: "100%",
    height: "100%",
  },
  upConteiner: {
    backgroundColor: "#000",
    width: "100%",
    height: "42%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderBottomEndRadius: 35,
    borderBottomLeftRadius: 35,
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  month: {
    color: "#fff",
    fontWeight: '300',
    letterSpacing: 5,
    marginHorizontal: 20,
  },
  arrowBtn: {
    color: "#fff",
  },
  midConteiner: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 40,
    height: "16%",
  },
  downConteiner: {
    backgroundColor: "#2DB071",
    bottom: 0,
    width: "100%",
    height: "42%",
    shadowColor: "#2DB07188",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    borderTopEndRadius: 35,
    borderTopLeftRadius: 35,
  },
});

export default Reports;
