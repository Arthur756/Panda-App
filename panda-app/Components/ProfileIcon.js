import React from 'react';
import { StyleSheet } from 'react-native'

import {
    Colors,
    Profile
} from './styles';

const {brand, darkLight, primary, secondary, btnred} = Colors;

const ProfileIcon = () => {
    return(
        <Profile source={require('../assets/perfil1.jpg')} />
    )
}

export default ProfileIcon;