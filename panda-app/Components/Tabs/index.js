import React from "react";

import { TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({navigation}){
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="attach-money" size={23} color="#07da63"/>
                    <TabText>Carteira</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="calculate" size={23} color="#07da63"/>
                    <TabText>Simulador</TabText>
                </TabItem>

                <TouchableOpacity onPress={() => navigation.navigate('Targets')}>

                    <TabItem>
                        <Icon name="check-circle" size={23} color="#07da63"/>
                        <TabText>Metas</TabText>
                    </TabItem>
                </TouchableOpacity>    

                <TabItem>
                    <Icon name="description" size={23} color="#07da63"/>
                    <TabText>Relatórios</TabText>
                </TabItem>

            </TabsContainer>
        </Container>
    );
}