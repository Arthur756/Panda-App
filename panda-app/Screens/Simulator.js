import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const Simulator = () => {
    return(
        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View style={styles.Header}>
                    <Text style={styles.HeaderTitle}>Organizador</Text>
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

                <View>
                    <Text style={styles.subTitle2}>Divídas em aberto</Text>
                </View>

                <View style={styles.ListContainer}>
                <ScrollView vertical>
                        <TouchableOpacity style={styles.List}>
                                <Text style={styles.textList}>
                                Conta: Luz{ '\n '}
                                    {'\n'}Valor: R$80,00.
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.List2}>
                                <Text style={styles.textList}>
                                Conta: Internet{ '\n '}
                                    {'\n'}Valor: R$160,00.
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.List3}>
                                <Text style={styles.textList}>
                                Conta: Água{ '\n '}
                                    {'\n'}Valor: R$85,00.
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.List4}>
                                <Text style={styles.textList}>
                                Conta: Faculdade{ '\n '}
                                    {'\n'}Valor: R$850,00.
                                </Text>
                        </TouchableOpacity>
                </ScrollView>
            </View>
           </ScrollView>

           <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}> Adicionar nova dívida</Text>
               <Text style={styles.buttonIcon}>+</Text>
           </TouchableOpacity>
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
        fontWeight: 'bold',
        marginTop: 45,
        marginLeft: 25,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    subTitle2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 45,
        marginLeft: 25,
        marginBottom: 20,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    Value: {
        fontSize: 16,
        marginTop: 5,
        marginRight: 24,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    ValueWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Edit: {
        width: 80,
        height: 28,
        marginLeft: 10,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#5BACF7',
        justifyContent: "center",
        alignItems: 'center',
    },
    List: {
        width: 335,
        height: 120,
        backgroundColor: '#43E19F',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    List: {
        width: 335,
        height: 120,
        backgroundColor: '#38A169',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    List2: {
        width: 335,
        height: 120,
        backgroundColor: '#C143E1',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    List3: {
        width: 335,
        height: 120,
        backgroundColor: '#2B6CB0',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    List4: {
        width: 335,
        height: 120,
        backgroundColor: '#718096',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textList: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    ListContainer: {
        width: 500,
        height: 350,
    },
    button: {
        width: 250,
        height: 75,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        marginLeft: 75,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 25
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonIcon: {
        fontSize: 28,
        color: '#FFF',
        marginLeft: 15
    }
})

export default Simulator;
