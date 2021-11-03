import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const ProfileIcon = ({navigation}) => {
    return(
        <TouchableOpacity style={styles.profileIcon} onPress={()=> navigation.navigate('Profile')} source={require('../assets/perfil1.jpg')}>
            <Image style={styles.profile} source={require('../assets/perfil1.jpg')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileIcon: {
        position: 'absolute',
        right: 28,
        top: 35,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#cccccc'
    }
})
export default ProfileIcon;