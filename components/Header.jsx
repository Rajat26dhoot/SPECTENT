import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            </View>

            <TouchableOpacity>
                <MaterialCommunityIcons name="bell-outline" size={25} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        height: 50,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 40,
    },
});
