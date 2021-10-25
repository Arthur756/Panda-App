import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

import {
    Colors,
    Profile
} from './styles';

const ProfileIcon = ({navigation}) => {
    return(
        <TouchableOpacity style={styles.profileIcon} onPress={()=> navigation.navigate('Profile')}>
            <Profile source={require('../assets/perfil1.jpg')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileIcon: {
        position: 'absolute',
        right: '1.5rem',
        top: '1.5rem',
    }
})
export default ProfileIcon;