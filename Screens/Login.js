import React, { userState, useState } from "react";

// formik
import { Formik } from "formik";

import { TouchableOpacity } from "react-native";
//Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  Subtitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../Components/styles";

import { View, ActivityIndicator } from "react-native";

//API Client
import axios from "react-native-axios";

//colors
const { brand, darkLight, primary } = Colors;

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://shielded-escarpment-20777.herokuapp.com/User/signin";
    console.log(credentials);
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        console.log(response);
        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home", { ...data[0] });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        axios.interceptors.response.use((response) => {
            console.log("Response:", JSON.stringify(response, null, 2));
            return response;
          });
        console.log('Erro dado: ', error);
        setSubmitting(false);
        handleMessage(
          " Ocorreu um erro. Verifique sua conexão e tente novamente"
        );
      });
  };
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });



  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

//   const next = {
//     position: "absolute",
//     width: 50,
//     height: 50,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//   };

  return (
    <StyledContainer>
      {/* <TouchableOpacity
        style={next}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="chevron-right" size={20} color={"#555"}></Icon>
      </TouchableOpacity> */}
      <InnerContainer>
        <PageLogo
          realizeMode="cover"
          source={require("./../assets/panda_logo.png")}
        />
        <PageTitle> Panda </PageTitle>
        <Subtitle> Login </Subtitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              handleMessage("Preencha todos os campos, por favor.");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <StyledFormArea>
              <MyTextInput
                label=" E-mail"
                icon="mail"
                placeholder="exemple@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleChange("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label=" Senha"
                icon="lock"
                placeholder="*********"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleChange("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox type={messageType}>{message}</MsgBox>
              {!isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Entrar</ButtonText>
                </StyledButton>
              )}

              {isSubmitting && (
                <StyledButton disable={true}>
                  <ActivityIndicator size="large" color={primary} />
                </StyledButton>
              )}

              {/* <Br/> */}
              <StyledButton
                google={true}
                onPress={() => navigation.navigate("Home")}
              >
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText google={true}>Entrar com Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText> Não possui uma conta?</ExtraText>
                <TextLink onPress={() => navigation.navigate("SignUp")}>
                  <TextLinkContent> Cadastrar </TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={27}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
