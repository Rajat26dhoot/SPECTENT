import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../colors';

export default function BottomNav() {
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem}>
                <MaterialCommunityIcons name="home-variant-outline" size={26} color={COLORS.navBarIcon} />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <View style={styles.scanButtonContainer}>
                <TouchableOpacity style={styles.scanButton}>
                    <MaterialCommunityIcons name="barcode-scan" size={28} color="#FFF" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.navItem}>
                <MaterialCommunityIcons name="account-circle-outline" size={26} color={COLORS.navBarIcon} />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 20,
        borderWidth: 1,
        borderColor: '#cfceceff',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navText: {
        fontSize: 10,
        fontFamily: 'Inter_400Regular',
        color: '#010101ff',
        marginTop: 2,
    },
    scanButtonContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#5cb3faff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#5cb3faff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
