import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    Animated,
} from 'react-native';
import dayjs from 'dayjs';
import { inspectionData, getInspectionsByMonth } from './mockData';
import Header from './components/Header';
import EquipmentCard from './components/EquipmentCard';
import DateFilter from './components/DateFilter';
import InspectionItem from './components/InspectionItem';
import EmptyState from './components/EmptyState';
import BottomNav from './components/BottomNav';

export default function InspectionHistoryScreen() {
    const [currentDate, setCurrentDate] = useState(dayjs('2026-01-01'));
    const [dataList, setDataList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        loadData();
    }, [currentDate]);

    const loadData = () => {
        const year = currentDate.year();
        const month = currentDate.month();
        const data = getInspectionsByMonth(year, month);

        setDataList(data);

        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            loadData();
            setRefreshing(false);
        }, 1000);
    };

    const changeMonth = (direction) => {
        setCurrentDate(currentDate.add(direction, 'month'));
    };

    const renderItem = ({ item }) => (
        <InspectionItem item={item} fadeAnim={fadeAnim} />
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <Header />

            <Text style={styles.screenTitle}>Inspection History</Text>

            {/* Main Content */}
            <FlatList
                data={dataList}
                keyExtractor={(item, index) => item.taskName + index}
                renderItem={renderItem}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                contentContainerStyle={[styles.listContent, dataList.length === 0 && { flex: 1 }]}
                ListHeaderComponent={
                    <View>
                        {/* Equipment Card */}
                        <EquipmentCard equipment={inspectionData.equipment} />

                        {/* Month Selector */}
                        <DateFilter currentDate={currentDate} onMonthChange={changeMonth} />
                    </View>
                }
                ListEmptyComponent={<EmptyState />}
            />

            {/* Bottom Nav */}
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    screenTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Inter_600SemiBold',
        marginVertical: 10,
        color: '#000',
    },
    listContent: {
        paddingBottom: 80, 
    },
});
