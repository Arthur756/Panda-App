import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const Wallet = () => {
    return(
        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View style={styles.Header}>
                    <Text style={styles.HeaderTitle}>Carteira Virtual</Text>
                </View>

                <View style={styles.Wrapper}>
                    <View>
                        <Text style={styles.subTitle}>Saldo atual</Text>
                    </View>

                    <View style={styles.ValueWrapper}>
                        <Text style={styles.Value}>R$ 1.500,00</Text>
                        <TouchableOpacity style={styles.Sum}>
                            <Text style={styles.SumText}>Adicionar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Edit}>
                            <Text>Extrato</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.Pix}>
                    <Text style={styles.PixTitle}>PIX</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator="false">
                                <View style={styles.Subcard}>
                                    <Text style={styles.SubcardTitle}>Minhas Chaves</Text>
                                </View>
                                <View style={styles.Subcard}>
                                    <Text style={styles.SubcardTitle}>Transferir</Text>
                                </View>
                                <View style={styles.Subcard}>
                                    <Text style={styles.SubcardTitle}>Receber</Text>
                                </View>
                                <View style={styles.Subcard}>
                                    <Text style={styles.SubcardTitle}>Meus limites Pix</Text>
                                </View>
                            </ScrollView>
                        <View>
                    </View>
                </View>

            <TouchableOpacity style={styles.List}>
                    <Text style={styles.textList}>
                        Ainda não foram encontradas { '\n '}
                        {'\n'}movimentações da sua conta.
                    </Text>
            </TouchableOpacity>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container : {
        marginTop: 50,
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
        color: 'rgba(0, 0, 0, 0.38)',
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
    },
    Sum: {  
        width: 80,
        height: 28,
        marginLeft: 35,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#2DB071',
        backgroundColor: '#2DB071',
        justifyContent: "center",
        alignItems: 'center',
    },
    SumText: {
        color: "#FFFFFF"
    },
    Edit: {
        width: 80,
        height: 28,
        marginLeft: 10,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#2DB071',
        justifyContent: "center",
        alignItems: 'center',
    },
    List: {
        width: '85%',
        height: 300,
        backgroundColor: '#2DB071',
        marginLeft: 25,
        marginTop: 80,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textList: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    Pix: {
        marginTop: 45,
        marginLeft: 25,
       
    },
    PixTitle: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.38)',
    },
    Subcard: {
        marginTop: 15,
        marginLeft: 10,
        width: 120,
        height: 65,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: 10,
    },
    SubcardTitle: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
})

export default Wallet;
