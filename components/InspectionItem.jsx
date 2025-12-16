import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import dayjs from 'dayjs';
import { COLORS, STATUS_CONFIG } from '../colors';

export default function InspectionItem({ item, fadeAnim }) {
    const statusStyle = STATUS_CONFIG[item.status] || STATUS_CONFIG.Pending;
    const day = dayjs(item.date).date();
    const isToday = dayjs(item.date).isSame(dayjs(), 'day');

    return (
        <Animated.View style={[styles.itemRow, { opacity: fadeAnim }]}>
            {/* Date Side */}
            <View style={styles.leftColumn}>
                <Text style={[styles.dateText, isToday && { color: COLORS.primaryBlue }]}>{day}</Text>
                {isToday && <Text style={{ fontSize: 10, color: COLORS.primaryBlue, fontWeight: '600' }}>Today</Text>}
            </View>

            {/* Card Side */}
            <View style={styles.rightColumn}>
                <TouchableOpacity style={[
                    styles.card,
                    { backgroundColor: statusStyle.bg },
                    isToday && { borderWidth: 1.5, borderColor: COLORS.primaryBlue }
                ]}>
                    {/* Pill Indicator */}
                    <View style={styles.pillContainer}>
                        <View style={[styles.statusPill, { backgroundColor: statusStyle.bar }]} />
                    </View>

                    {/* Content */}
                    <View style={styles.cardContent}>
                        <Text style={styles.taskName}>{item.taskName}</Text>
                        <Text style={styles.taskDesc} numberOfLines={1}>{item.taskDescription}</Text>
                    </View>

                    {/* Divider */}
                    <View style={styles.verticalDivider} />

                    {/* Status Text on Right */}
                    <View style={styles.statusContainer}>
                        <Text style={[styles.statusText, { color: statusStyle.text }]}>{item.status}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    leftColumn: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#E0E0E0',
    },
    dateText: {
        fontSize: 16,
        fontFamily: 'Inter_700Bold',
        color: '#212121',
    },
    rightColumn: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    card: {
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 60,
        paddingVertical: 8,
        paddingRight: 8,
    },
    pillContainer: {
        width: 16,
        alignItems: 'center',
    },
    statusPill: {
        width: 4,
        height: 40,
        borderRadius: 2,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 4,
    },
    taskName: {
        fontSize: 13,
        fontFamily: 'Inter_700Bold',
        color: '#000',
        marginBottom: 2,
    },
    taskDesc: {
        fontSize: 11,
        fontFamily: 'Inter_400Regular',
        color: '#757575',
    },
    verticalDivider: {
        width: 1,
        height: '70%',
        backgroundColor: '#d1d1d1ff',
        marginHorizontal: 8,
    },
    statusContainer: {
        justifyContent: 'center',
        minWidth: 70,
    },
    statusText: {
        fontSize: 11.5,
        fontFamily: 'Inter_700Bold',
    },
});
