import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DateFilter({ currentDate, onMonthChange }) {
    return (
        <View style={styles.monthSelectorContainer}>
            <Text style={styles.sectionTitle}>Inspections</Text>
            <View style={styles.monthControls}>
                <Text style={styles.monthText}>{currentDate.format('in MMMM YYYY')}</Text>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => onMonthChange(-1)} style={styles.arrowBtn}>
                        <Ionicons name="chevron-back" size={20} color="#2E2E30" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onMonthChange(1)} style={styles.arrowBtn}>
                        <Ionicons name="chevron-forward" size={20} color="#2E2E30" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    monthSelectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'Inter_600SemiBold',
        color: '#2E2E30',
    },
    monthControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    monthText: {
        fontSize: 17,
        fontFamily: 'Inter_500Medium',
        color: '#2E2E30',
    },
    arrowBtn: {
        padding: 4,
    },
});
