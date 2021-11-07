import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Tabs = ({ navigation }) => {
  return (
    <View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Image
            style={styles.tabImage}
            source={require("../assets/wallet.png")}
          />
          <Text style={styles.tabText}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Image
            style={styles.tabImage}
            source={require("../assets/calc.png")}
          />
          <Text style={styles.tabText}>Simulador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            navigation.navigate("Targets");
          }}
        >
          <Image
            style={styles.tabImage}
            source={require("../assets/target.png")}
          />
          <Text style={styles.tabText}>Metas</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.reports}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Image style={styles.reportImage} source={require("../assets/reports.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    width: "100%",
    height: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },
  tab: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    position: "absolute",
    color: "white",
    bottom: -25,
  },
  tabImage: {
    height: 40,
    width: 40,
  },
  reports: {
    // marginHorizontal: "auto",
    backgroundColor: "white",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    // width: 'auto',
    margin: 25,
    height: 250,
  },
  reportImage: {
    width: 244,
    height: 177.17
  }
});

export default Tabs;
