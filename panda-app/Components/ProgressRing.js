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
          style={styles.lines}
          // rotation={0}
          size={180}
          width={18}
          fill={35}
          lineCap={"round"}
          tintColor="#B24FBD"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#2C1430"
        />
        <AnimatedCircularProgress
          style={styles.lines}
          // rotation={0}
          size={120}
          width={18}
          fill={60}
          lineCap={"round"}
          tintColor="#fccb00"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#5A4D14"
        />
        <AnimatedCircularProgress
          style={styles.lines}
          // rotation={0}
          size={60}
          width={18}
          fill={20}
          lineCap={"round"}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
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
    top: 50,
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
    fontSize: 16,
    marginLeft: 10,
    color: "#fff",
  },
});
export default ProgressRing;
