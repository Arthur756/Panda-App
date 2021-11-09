import React from "react";
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
} from "react-native";
import { useState } from "react/cjs/react.development";

// Bibliotecas
import Icon from "react-native-vector-icons/FontAwesome";
import ColorPicker from "react-native-wheel-color-picker";

// Componentes
import ProfileIcon from "../Components/ProfileIcon";
import Target from "../Components/Target";

const Targets = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [targetTitle, setTargetTitle] = useState("");
  const [targetValue, setTargetValue] = useState();
  const [currentColor, setCurrentColor] = useState("");
  const [id, setId] = useState(0);
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
    console.log(newArray)
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
      setTargetTitle();
      setTargetValue();
    }
  }

  return (
    <View style={[styles.main]}>
      <StatusBar barStyle="light-content" backgroundColor="#A1E4FD" />
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
          <Text style={[styles.textTitle]}>Metas</Text>
        </View>
        <View style={[styles.header_bottom]}>
          <Text style={[styles.textPoupanca]}>Poupança</Text>
          <Text style={[styles.textSaldo]}>R$ 3.500,00</Text>
        </View>
      </View>
      <ProfileIcon navigation={navigation} />

      <View style={[styles.headerMetas]}>
        <Text style={[styles.textSuasMetas]}>Suas metas</Text>
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
  // Modal
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

  // Main
  main: {
    flex: 1,
    backgroundColor: "#dddddd",
    flexDirection: "column",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    // backgroundColor: "pink"
  },

  // Header
  header: {
    flexDirection: "column",
    marginTop: 30,
  },
  header_top: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  header_bottom: {
    flexDirection: "column",
    width: "100%",
  },
  textTitle: {
    // fontFamily: "monospace",
    color: "#000000",
    fontSize: 34,
  },
  textPoupanca: {
    marginTop: 25,
    // fontFamily: "monospace",
    color: "#AAAAAA",
    fontSize: 16,
  },
  textSaldo: {
    color: "#000000",
    fontSize: 24,
  },
  headerMetas: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textSuasMetas: {
    color: "#147A50",
    fontSize: 16,
  },
  textFiltro: {
    color: "#333333",
    fontSize: 16,
  },

  // Targets
  targets: {
    height: "100%",
    // paddingBottom: 70,
  },
  targetsList: {
    // backgroundColor: 'green',
    paddingBottom: 85,
    paddingTop: 10,
  },

  // Button
  createTargetBtn: {
    position: "absolute",
    flex: 0.1,
    right: 15,
    bottom: 15,
    backgroundColor: "#2DB071",
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
