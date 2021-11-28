import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Bibliotecas
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width -80;

import {
  LineChart
} from "react-native-chart-kit";

const BezierChart = () => {
  
  // Configuração do Bezier Chart
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43,80],
        color: () => `#fccb00`, // optional
        strokeWidth: 2.6, // optional
      },
      {
        data: [10, 25, 18, 50, 74, 23, 40],
        color: () => `#00e0ff`, // optional
        strokeWidth: 2.6, // optional
      },
      {
        data: [80, 40, 10, 20, 85, 15, 12],
        color: () => `#B24FBD`, // optional
        strokeWidth: 2.6, // optional
      }
    ],
    //legend: ["Lanches","Viagens", "Compras"] // optional
  };

  return (
    <View style={styles.conteiner}>
      <LineChart
        style={styles.chart}
        data={data}
        width={screenWidth}
        height={200}
        fromZero={true}
        segments={6}
        chartConfig={{
          backgroundGradientFrom: "#00000000",
          backgroundGradientTo: "#00000000",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#DDD`,
          labelColor: () => `#AAA`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "1.5",
            stroke: "#fff"
          }
        }}
        bezier
      />
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 15,
    width: "100%",
    paddingHorizontal: 30,
  },
  chart: {
    backgroundColor: "#FFF",
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 15,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  }
})
export default BezierChart;