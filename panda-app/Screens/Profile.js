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
    TextLinkContent,
    WelcomeContainer,
    Avatar

} from '../Components/styles';

import {View} from 'react-native';

//colors
const {brand, darkLight, primary, btnred} = Colors;


const Profile = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);

    return(
        
            <InnerContainer>
                    <PageLogo realizeMode="cover" source={require('./../assets/panda_logo.png')}/>
                    <PageTitle> Panda </PageTitle>
                    <Subtitle> Perfil </Subtitle>


                <WelcomeContainer>
                    <StyledFormArea>
                    <Avatar realizeMode="cover" source={require('./../assets/perfil1.jpg')}/>

                    <PageTitle welcome={true}> Ana Chaves </PageTitle>
                    <Subtitle welcome={true}> anachaves282@gmail.com </Subtitle>
                    <Subtitle welcome={true}> 027.282.926-34 </Subtitle>
                    <Subtitle welcome={true}> ******** </Subtitle>
                        <br/>
                        <StyledButton danger={true} onPress={() => navigation.navigate('Login')}>
                            <ButtonText danger={true}>
                                Sair
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
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

export default Profile;