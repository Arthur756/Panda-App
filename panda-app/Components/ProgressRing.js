import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Bibliotecas
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Icon from "react-native-vector-icons/FontAwesome";

const ProgressRing = () => {
  // Configuração dos Gráficos

  // Fim
  return (
    <View style={styles.conteiner}>
      <View style={styles.progressRing}>
        <AnimatedCircularProgress
          duration={1500}
          style={styles.lines}
          // rotation={0}
          size={170}
          width={16}
          fill={35}
          lineCap={"round"}
          tintColor="#B24FBD"
          backgroundColor="#2C1430"
        />
        <AnimatedCircularProgress
          duration={1500}
          style={styles.lines}
          // rotation={0}
          size={115}
          width={16}
          fill={60}
          lineCap={"round"}
          tintColor="#fccb00"
          backgroundColor="#5A4D14"
        />
        <AnimatedCircularProgress
          duration={1500}
          style={styles.lines}
          // rotation={0}
          size={60}
          width={16}
          fill={20}
          lineCap={"round"}
          tintColor="#00e0ff"

          backgroundColor="#0B5863"
        />
      </View>
      <View style={styles.legendConteiner}>
        <View style={styles.legend}>
          <Icon name="circle" size={21} color={"#B24FBD"}></Icon>
          <Text style={styles.legendText}>Lanches</Text>
        </View>
        <View style={styles.legend}>
          <Icon name="circle" size={21} color={"#fccb00"}></Icon>
          <Text style={styles.legendText}>Viagens</Text>
        </View>
        <View style={styles.legend}>
          <Icon name="circle" size={21} color={"#00e0ff"}></Icon>
          <Text style={styles.legendText}>Compras</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    top: 115,
    padding: 25,
  },
  progressRing: {
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 180,
  },
  lines: {
    position: "absolute",
  },
  legendConteiner: {
    justifyContent: "space-between",
    marginLeft: 40,
    marginTop: 40,
    marginBottom: 45,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendText: {
    fontSize: 14,
    marginLeft: 10,
    color: "#fff",
  },
});
export default ProgressRing;
