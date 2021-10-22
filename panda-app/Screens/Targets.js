import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

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

import ProfileIcon from '../Components/ProfileIcon'

//colors
const {brand, darkLight, primary, btnred} = Colors;

const Targets = () => {
    return (
        <View style={[styles.main]}>
            <View style={[styles.header]}>
                <View style={[styles.header_top]}>
                    <Text style={[styles.textTitle]}>
                        Metas 
                    </Text>
                    <ProfileIcon />
                </View>
                <View style={[styles.header_bottom]}> 
                    <Text style={[styles.textPoupanca]}>
                        Poupança
                    </Text>
                    <Text style={[styles.textSaldo]}>
                        R$ 3.500,00
                    </Text>
                </View>
            </View>
            <View style={[styles.targets]}>
                <View style={[styles.headerMetas]}>
                    <Text style={[styles.textSuasMetas]}>Suas metas</Text>
                    <Text style={[styles.textFiltro]}>Filtro</Text>
                </View>
                <ScrollView style={[styles.targetsList]}>
                    <Text style={{fontSize: 40}}>   
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // Header
    main: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginTop: '2rem',
    },
    header: {
        flexDirection: 'column',
    },
    header_top: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    header_bottom: {
        flexDirection: 'column',
        width: '100%',
    },
    textTitle: {
        fontFamily: 'monospace',
        color: '#000000',
        fontSize: '2rem',
    },
    textPoupanca: {
        fontFamily: 'monospace',
        color: '#AAAAAA',
        fontSize: '0.9rem'
    },
    textSaldo: {
        color: '#000000',
        fontSize: '1.6rem',
    },

    // Targets
    targets: {
        marginTop: '5rem',
        height: '100%'
    },
    headerMetas: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    textSuasMetas: {
        color: '#147A50',
        fontSize: '1.2rem',
    },
    textFiltro: {
        color: '#333333',
        fontSize: '1.2rem',
    },
    targetsList: {
        backgroundColor: 'pink',
    },
})

export default Targets;