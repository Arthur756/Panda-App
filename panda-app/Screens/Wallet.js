import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Wallet = () => {
    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTitle}>Carteira Virtual</Text>
            </View>

            <View style={styles.CreditCard}></View>

            <View>
                <View>
                    <Text style={styles.subTitle}>Saldo atual</Text>
                </View>

                <View style={styles.ValueWrapper}>
                    <Text style={styles.Value}>R$ 1.500,00</Text>
                    <View>
                        <Text>Adicionar</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    Header: {
        marginLeft: 25,
        marginTop: 10,
    },
    HeaderTitle: {
        fontSize: 25,
        fontWeight: 'bold', 
    },
    CreditCard: {
        width: 245,
        height: 135,
        backgroundColor: '#43E19F',
        marginLeft: 25,
        marginTop: 15,
        borderRadius: 20,
    },
    subTitle: {
        fontSize: 16,
        marginTop: 45,
        marginLeft: 25,
        color: 'rgba(0, 0, 0, 0.38)'
    },
    Value: {
        fontSize: 16,
        marginTop: 5,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    ValueWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Wallet;
