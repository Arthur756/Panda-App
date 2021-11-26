import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Bibliotecas
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width -10;

import {
  LineChart
} from "react-native-chart-kit";

const BezierChart = () => {
  
  // Configuração do Bezier Chart
  const data = {
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43,80],
        color: () => `#fccb00`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [10, 25, 18, 50, 78, 23, 40],
        color: () => `#00e0ff`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [80, 40, 10, 20, 80, 15, 12],
        color: () => `#B24FBD`, // optional
        strokeWidth: 2, // optional
      }
    ],
    //legend: ["Lanches","Viagens", "Compras"] // optional
  };

  return (
    <View style={styles.conteiner}>
      <LineChart
        data={data}
        width={screenWidth}
        height={235}
        fromZero={true}
        withShadow={true}
        withVerticalLabels={false}
        withHorizontalLabels={true}
        verticalLabelRotation={30}
        segments={6}
        withOuterLines={true}
        withInnerLines={true}
        chartConfig={{
          backgroundGradientFrom: "#00000000",
          backgroundGradientTo: "#00000000",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => `#eee`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "5",
            strokeWidth: "0",
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
    paddingRight: 5,
  }
})
export default BezierChart;