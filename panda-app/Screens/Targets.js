import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  TextInput,
  FlatList,
  Image,
} from "react-native";

// Bibliotecas
import Icon from "react-native-vector-icons/FontAwesome";
import ColorPicker from "react-native-wheel-color-picker";

// Componentes
import ProfileIcon from "../Components/ProfileIcon";
import Target from "../Components/Target";

// Imagens
import wave from "../assets/profile-wave.png";

const Targets = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [targetTitle, setTargetTitle] = useState("");
  const [targetValue, setTargetValue] = useState();
  const [currentColor, setCurrentColor] = useState("");
  const [id, setId] = useState(0);
  const [totalTarget, setTotalTarget] = useState();
  const [targetList, setTargetList] = useState([
    {
      id: 10,
      color: "#c71585",
      targetTitle: "Viagem para inglaterra",
      value: 1500,
      totalTarget: 3500,
    },
    {
      id: 11,
      color: "#ffd700",
      targetTitle: "Celular novo",
      value: 200,
      totalTarget: 2000,
    },
    {
      id: 12,
      color: "#8b0000",
      targetTitle: "Curso de trader",
      value: 450,
      totalTarget: 500,
    },
    {
      id: 13,
      color: "#dddddd",
      targetTitle: "Curso de DevWeb",
      value: 25,
      totalTarget: 35,
    },
  ]);

  const renderItem = ({ item }) => (
    <Target
      id={item.id}
      color={item.color}
      title={item.targetTitle}
      value={item.value}
      totalTarget={item.totalTarget}
      changeTarget={changeTarget}
    />
  );

  function calcTarget() {
    var total = 0;
    targetList.forEach((element) => {
      total += element.totalTarget;
    });
    setTotalTarget(parseFloat(total).toFixed(2));
  }

  function handleChangeTitle(event) {
    setTargetTitle(event.target.value);
  }

  function handleChangeValue(event) {
    setTargetValue(event.target.value);
  }

  function changeTarget(id, color, targetTitle, value, totalTarget) {
    const newArray = [...targetList];
    var index = newArray
      .map(function (elemento) {
        return elemento.id;
      })
      .indexOf(id);
    newArray[index] = { id, color, targetTitle, value, totalTarget };
    console.log(newArray);
    setTargetList(newArray);
  }

  function createTarget(id, color, targetTitle, value, totalTarget) {
    if (totalTarget == null || targetTitle == null) {
      return alert("Preencha todos os campos!");
    } else {
      const newTarget = { id, color, targetTitle, value, totalTarget };
      const newArray = [...targetList, newTarget];
      setModalVisible(false);
      setId(id + 1);
      setTargetList(newArray);
      calcTarget();
      setTargetTitle();
      setTargetValue();
    }
  }

  useEffect(() => calcTarget());

  return (
    <View style={[styles.main]}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Image source={wave} style={styles.wave}></Image>
      <View style={styles.background}></View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times" size={20} color={"#333"}></Icon>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Adicionar Meta</Text>
            <Text style={styles.modalText}>Título</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Ex.: Viagem para londres"
              onChange={handleChangeTitle}
            />
            <Text style={styles.modalText}>Meta</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Ex.: 3100,00"
              keyboardType="numeric"
              onChange={handleChangeValue}
            />
            <ColorPicker
              // color={targetColor}
              onColorChange={(c) => setCurrentColor(c)}
              swatches={false}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                createTarget(id, currentColor, targetTitle, 0, targetValue);
              }}
            >
              <Text style={styles.modalButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={[styles.header]}>
        <View style={[styles.header_top]}>
          <Text style={[styles.textTitle]}>Suas Metas</Text>
        </View>
        <View style={styles.headerConteiner}>
          <View style={[styles.headerLeft]}>
            <Text style={[styles.textPoupanca]}>Ganhos Mensais</Text>
            <Text style={[styles.textSaldo]}>R$ 6.500,00</Text>
          </View>
          <View style={[styles.headerRight]}>
            <Text style={[styles.textPoupanca]}>Total em Metas</Text>
            <Text style={[styles.textSaldo]}>R$ {totalTarget}</Text>
          </View>
        </View>
      </View>
      {/* <ProfileIcon navigation={navigation} /> */}

      <View style={[styles.headerMetas]}>
        <Text style={[styles.textFiltro]}>Filtro</Text>
      </View>
      <ScrollView
        style={[styles.targets]}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          style={[styles.targetsList]}
          data={targetList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </ScrollView>
      <TouchableOpacity
        style={styles.createTargetBtn}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="plus" size={35} color={"#fff"}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 126,
    height: 110,
  },

  // Modal //
  modal: {
    backgroundColor: "#00000088",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: -15,
    marginLeft: -10,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "500",
  },
  modalInput: {
    color: "#111",
    width: "100%",
    fontSize: 14,
    backgroundColor: "#eee",
    // borderWidth: 2,
    padding: 10,
    marginTop: 4,
    marginBottom: 15,
    borderRadius: 3,
  },
  modalClose: {
    position: "absolute",
    top: 25,
    right: 20,
  },
  modalButton: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#2DB071",
    padding: 10,
    borderRadius: 20,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  // Main //
  main: {
    flex: 1,
    backgroundColor: "#070707",
    flexDirection: "column",
    // paddingLeft: 25,
    // paddingRight: 25,
    paddingTop: 25,
    // backgroundColor: "pink"
  },

  // Background //
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#2DB071",
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    width: "100%",
    height: 600,
    flex: 1,
  },

  // Header //
  header: {
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "end",
    paddingHorizontal: 25,
  },
  header_top: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "end",
    marginBottom: 35,
  },
  headerLeft: {
    flexDirection: "column",
    // width: "100%",
    // alignItems: "end",
  },
  headerRight: {
    flexDirection: "column",
    // width: "100%",
    alignItems: "end",
  },
  textTitle: {
    // fontFamily: "monospace",
    color: "#fff",
    fontSize: 34,
  },
  textPoupanca: {
    marginTop: 25,
    // fontFamily: "monospace",
    color: "#AAAAAA",
    fontSize: 16,
  },
  textSaldo: {
    color: "#fff",
    fontSize: 24,
  },
  headerConteiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  headerMetas: {
    marginTop: 50,
    paddingBottom: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "end",
    // backgroundColor: "pink",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 7,
  },
  textFiltro: {
    paddingHorizontal: 25,
    color: "#333333",
    fontSize: 16,
  },

  // Targets //
  targets: {
    height: "100%",
    
    // paddingBottom: 70,
  },
  targetsList: {
    paddingHorizontal: 25,
    // backgroundColor: 'green',
    marginBottom: 75,
    paddingTop: 10,
  },

  // Button
  createTargetBtn: {
    position: "absolute",
    flex: 0.1,
    right: 15,
    bottom: 15,
    backgroundColor: "#070707",
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
});

export default Targets;
