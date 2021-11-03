import styled from 'styled-components/native';
import { StatusBar, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {View} from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary:"#fff",
    secondary:"#e5e7eb",
    third: "#1f2937",
    darkLight: "#9ca3af",
    brand: "#07da63",
    btnred: "#ed2939"

};

const { primary, secondary, third, darkLight, brand, btnred } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const PageLogo = styled.Image`
    width: 120px;
    height: 80px;
    margin-top: 40px;
    max-width: 100%;
    max-height: 100%;
`;

export const Avatar = styled.Image`
    width: 130px;
    height: 130px;
    margin: auto;
    border-radius: 65px;
    border-width: 6px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    margin-bottom: 2rem;

    ${(props) => props.welcome &&`
        font-size: 20px;
    `}
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${third};
    padding: 10px;
    white-space: nowrap;

    ${(props) => props.welcome &&`
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 14px;
        align-items: center;
    `}

`;

export const StyledFormArea = styled.View`
    width: 90%;

`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    height: 60px;
    margin: 3px;
    margin-bottom: 10px;
    color: ${third};
    
`;

export const StyledInputLabel = styled.Text`
    color: ${third};
    font-size: 13px;
    text-align: left;
    
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:1;

`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index:1;

`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${third};
        flex-direction: row;
        justify-content: center;

    
    `}
    ${(props) => props.danger == true && `
        background-color: ${btnred};
        flex-direction: row;
        justify-content: center;
    `}    

`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding: 25px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${third};
    font-size: 15px;

`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;

`;