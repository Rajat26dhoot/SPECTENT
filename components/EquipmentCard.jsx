import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default function EquipmentCard({ equipment }) {
    if (!equipment) return null;

    return (
        <View style={styles.equipmentCard}>
            <View style={styles.equipmentBadge}>
                <Text style={styles.equipmentName}>{equipment.name}</Text>
            </View>
            <View style={styles.equipmentDetails}>
                <Text style={styles.equipmentDetailText}>ID : {equipment.id}</Text>
                <Text style={styles.equipmentDetailText}>Tag : {equipment.tag}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    equipmentCard: {
        backgroundColor: COLORS.primaryBlue,
        borderRadius: 15,
        marginHorizontal: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    equipmentBadge: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 20,
    },
    equipmentName: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
        color: '#000',
    },
    equipmentDetailText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Inter_400SemiBold',
        marginBottom: 2,
    },
});
