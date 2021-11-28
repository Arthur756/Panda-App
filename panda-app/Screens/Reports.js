import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

// Bibliotecas
import SwitchSelector from "react-native-switch-selector";
import Icon from "react-native-vector-icons/FontAwesome";

// Componentes
import BezierChart from "../Components/BezierChart";
import ProgressRing from "../Components/ProgressRing";

// Imagens
import wave from "../assets/profile-wave.png";

const Reports = () => {
  // Configuração dos meses
  const month = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  //Fim

  // Configuração do Switch
  const options = [
    { label: "DIA", value: "1" },
    { label: "SEMANA", value: "2" },
    { label: "MÊS", value: "3" },
  ];
  // Fim

  const fadeText = useRef(new Animated.Value(0)).current;
  const fadeBtn = useRef(new Animated.Value(0)).current;
  const animatedValueUp = useRef(new Animated.Value(-500)).current;
  const animatedValueDown = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(fadeText, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(),
      Animated.timing(fadeBtn, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      }).start(),
      Animated.timing(animatedValueUp, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(),
      Animated.timing(animatedValueDown, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
  }, []);

  function changeMonth(command) {
    if (command === "previous") {
      if (currentMonth == 0) {
        setCurrentMonth(11);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else if (command === "next") {
      if (currentMonth == 11) {
        setCurrentMonth(0);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  }

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.upConteiner,
          { transform: [{ translateY: animatedValueUp }] },
        ]}
      >
        {/* <Image source={wave} style={styles.wave}></Image> */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrowBtnLeft}
            onPress={() => changeMonth("previous")}
          >
            <Icon name="chevron-left" size={12} color={"#fff"} />
          </TouchableOpacity>
          <Text style={styles.month}>{month[currentMonth]}</Text>
          <TouchableOpacity
            style={styles.arrowBtnRight}
            onPress={() => changeMonth("next")}
          >
            <Icon name="chevron-right" size={12} color={"#fff"} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleTextUp}>Maiores gastos</Text>

        <ProgressRing />
      </Animated.View>
      <Animated.View style={[styles.midConteiner, { opacity: fadeBtn }]}>
        <SwitchSelector
          options={options}
          initial={0}
          buttonColor={"#F1F1F1"}
          backgroundColor={"#CDCDCD"}
          textColor={"#434343"}
          selectedColor={"#000"}
          fontSize={14}
          animationDuration={120}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.downConteiner,
          { transform: [{ translateY: animatedValueDown }] },
        ]}
      >
        <View style={styles.downHeader}>
          <Text style={styles.titleTextDown}>Relação geral</Text>
        </View>
        <BezierChart />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
  },
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 126,
    height: 110,
  },
  upConteiner: {
    backgroundColor: "#000",
    width: "100%",
    height: "42%",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 20,
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
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
    fontWeight: "300",
    letterSpacing: 5,
    padding: 10,
  },
  arrowBtnLeft: {
    padding: 10,
    marginLeft: 80,
    marginRight: "auto"
  },
  arrowBtnRight: {
    padding: 10,
    marginRight: 80,
    marginLeft: "auto",
  },
  titleTextUp: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 25,
    paddingHorizontal: 20,
  },
  midConteiner: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 40,
    height: "16%",
  },
  downHeader: {
    width: "100%",
  },
  titleTextDown: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 30,
    paddingHorizontal: 30,
  },
  downConteiner: {
    backgroundColor: "#2DB071", //#333 #2DB071
    bottom: 0,
    width: "100%",
    height: "42%",
    alignItems: "center",
    // paddingTop: 80,
    // shadowColor: "#2DB07188",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.7,
    // shadowRadius: 20,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
  },
});

export default Reports;
