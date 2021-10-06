import React from "react";

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({navigation}){
    return(
        <Container>
            <TabsContainer>
                <TabItem onclick={() => navigation.navigate('Welcome')}>
                    <Icon name="person" size={23} color="#07da63"/>
                    <TabText>Perfil</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="attach-money" size={23} color="#07da63"/>
                    <TabText>Carteira</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="calculate" size={23} color="#07da63"/>
                    <TabText>Simulador</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="check-circle" size={23} color="#07da63"/>
                    <TabText>Metas</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="description" size={23} color="#07da63"/>
                    <TabText>Relatórios</TabText>
                </TabItem>

            </TabsContainer>
        </Container>
    );
}