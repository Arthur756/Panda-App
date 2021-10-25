import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Componentes
import ProfileIcon from '../Components/ProfileIcon';
import Target from '../Components/Target';

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
                <View style={[styles.targetsList]}>
                    <Target 
                        color={'#c71585'} 
                        title={'Viagem para inglaterra'}
                        value={1500}
                        totalTarget={3500}
                    />
                    <Target 
                        color={'#ffd700'} 
                        title={'Celular novo'}
                        value={200}
                        totalTarget={2000}
                    />
                    <Target 
                        color={'#90ee90'} 
                        title={'Harmonização facial'}
                        value={500}
                        totalTarget={1000}
                    />
                    <Target 
                        color={'#8b0000'} 
                        title={'Curso de design'}
                        value={450}
                        totalTarget={500}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.createTargetBtn}>
                <Icon name="plus" size={35} color={'#fff'}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // Main
    main: {
        flexDirection: 'column',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        // backgroundColor: "pink"
    },

    // Header
    header: {
        flexDirection: 'column',
        marginTop: '2rem',
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
        // backgroundColor: 'green',
        marginTop: '1.5rem',
    },

    // Button
    createTargetBtn: {
        position: 'fixed',
        alignSelf: 'flex-end',
        right: 15,
        bottom: 15,
        backgroundColor: '#2DB071',
        width: '5rem',
        height: '5rem',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 7,
    },
})

export default Targets;