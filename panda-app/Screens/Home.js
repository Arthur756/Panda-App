import React, {userState, useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
// formik
import {Formik} from 'formik';

import ProfileIcon from '../Components/ProfileIcon';

import Tabs from '../Components/Tabs';

import { Content, Card, CardHeader, CardContent, CardFooter,
Title, Description } from '../Components/Tabs/styles';

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
    Avatar,
    Profile

} from '../Components/styles';

import {View} from 'react-native';

//colors
const {brand, darkLight, primary, btnred} = Colors;


const Home = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);

    return(
        
        <InnerContainer>
                <ProfileIcon navigation={navigation} />
                    <PageLogo realizeMode="cover" source={require('./../assets/panda_logo.png')}/>
                    {/* <PageTitle> Panda </PageTitle> */}
                    <PageTitle welcome={true}> Bem Vindo ao Panda! </PageTitle>
                    <Content>
                        <Card>
                            <CardHeader>
                                <Icon name="account-balance-wallet" size={34} color="#07da63"/>
                            </CardHeader>

                            <CardContent>
                                <Title>Carteira Virtual</Title>
                                <Description>R$ 12.452,85</Description>
                            </CardContent>

                            <CardFooter>
                                R$ 130,90 foram adicionados a sua carteira recentemente
                            </CardFooter>
                        </Card>
                    </Content>
                    <Tabs navigation={navigation}/>
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

export default Home;