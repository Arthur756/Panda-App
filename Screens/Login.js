import React, {userState, useState} from 'react';

// formik
import {Formik} from 'formik';

//Icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


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


const Login = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo realizeMode="cover" source={require('./../assets/panda_logo.png')}/>
                <PageTitle> Panda </PageTitle>
                <Subtitle> Login </Subtitle>


                <Formik
                    initialValues={{email:'', password: ''}}
                    onSumit={(values) => {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
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
                    <StyledButton onPress={() => navigation.navigate('Welcome')}>
                        <ButtonText>
                            Entrar
                        </ButtonText>
                    </StyledButton>
                    <br/>
                    <StyledButton google={true} onPress={() => navigation.navigate('Welcome')}>
                        <Fontisto name="google" color={primary} size={25}/>
                        <ButtonText google={true}>
                            Entrar com Google
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText> Não possui uma conta?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('SignUp')}>
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

export default Login;