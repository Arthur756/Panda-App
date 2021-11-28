import React, {userState, useState} from 'react';

// formik
import {Formik} from 'formik';

//Icons
import {Octicons, Ionicons, Fontisto, FontAwesome, AntDesign} from '@expo/vector-icons';


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
    TextLinkContent

} from './../Components/styles';

import {View} from 'react-native';

//colors
const {brand, darkLight, primary} = Colors;


const SignUp = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);

        const [message, setMessage] = useState();
        const [messageType, setMessageType] = useState();

        const handleSignup = (credentials, setSubmitting) => {
            handleMessage(null);
            const url = 'https://shielded-escarpment-20777.herokuapp.com/User/signup'

            axios.post(url, credentials).then((response)=> {
                const result = response.data;
                const {message, status, data} = result;

              if(status !== 'SUCCESS'){
                  handleMessage(message, status);
              } else{
                  navigation.navigate('Home', {...data});
              }
              setSubmitting(false);
            })
            .catch(error =>{
                console.log(error.JSON());
                setSubmitting(false);
                handleMessage(" Ocorreu um erro. Verifique sua conexão e tente novamente");
            })
        }
    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessage(type);
    };

    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo realizeMode="cover" source={require('./../assets/panda_logo.png')}/>
                <PageTitle> Panda </PageTitle>
                <Subtitle> Cadastro </Subtitle>


                <Formik
                    initialValues={{email:'', name:'', cpf:'', password: '', confirmPassword:''}}
                    onSumit={(values, {setSubmitting}) => {
                        if (values.email == '' || values.name == '' || values.cpf == '' || values.password == '' || 
                        values.confirmPassword == ''){
                            handleMessage('Preencha todos os campos, por favor.');
                            setSubmitting(false);
                        } else if(values.password !== values.confirmPassword){
                            handleMessage('Senhas não correspondem');
                            setSubmitting(false);
                        }
                        else{
                            handleSignup(values, setSubmitting);
                        }
                    }}
                >{({ handleChange, handleSubmit, values, isSubmitting }) => (<StyledFormArea>
                    <MyTextInput 
                        label=" E-mail"
                        icon="mail"
                        placeholder="exemple@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleChange('email')}
                        value = {values.email}
                        keyboardType = "email-address"
                    />

                    <MyTextInput 
                        label=" Nome Completo"
                        icon="person"
                        placeholder="Ana Chaves"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('name')}
                        onBlur={handleChange('name')}
                        value = {values.name}
                    />

                    <MyTextInput 
                        label=" CPF"
                        icon="info"
                        placeholder="000.000.000-00"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('cpf')}
                        onBlur={handleChange('cpf')}
                        value = {values.cpf}
                    />

                    <MyTextInput 
                        label=" Senha"
                        icon="lock"
                        placeholder="*********"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleChange('password')}
                        value = {values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />

                    <MyTextInput 
                        label=" Confirmar Senha"
                        icon="lock"
                        placeholder="*********"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleChange('confirmPassword')}
                        value = {values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting &&(
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Entrar
                        </ButtonText>
                    </StyledButton>
                    )}
                    
                    <ExtraView>
                        <ExtraText> Já possui uma conta?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('Login')}>
                            <TextLinkContent> Login </TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>
                )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size={27} color={darkLight} />
                </RightIcon>
            )}

        </View>
    )
}

export default SignUp;