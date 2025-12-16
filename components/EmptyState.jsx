import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EmptyState() {
    return (
        <View style={styles.emptyContainer}>
            <MaterialCommunityIcons name="clipboard-text-off-outline" size={60} color="#CCC" />
            <Text style={styles.emptyText}>No inspections found for this month</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    emptyText: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        color: '#9E9E9E',
    },
});
