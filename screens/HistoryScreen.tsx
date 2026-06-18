import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../utils/LanguageContext';
import { getScores } from '../utils/storage';

export default function HistoryScreen() {
  const { t } = useLanguage();
  const [history, setHistory] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadHistory = async () => {
        const scores = await getScores();
        setHistory(scores);
      };
      loadHistory();
    }, [])
  );

  const renderItem = ({ item }: any) => {
    const safeStage = item.stageTested || "General Test";
    const safeRiskLevel = item.riskLevel || t('lowRisk');
    const isHighRisk = safeRiskLevel.includes('Elevated') || safeRiskLevel.includes('அதிக') || safeRiskLevel.includes('उच्च');

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.dateText}>{item.date}</Text>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreBadgeText}>Score: {item.score}</Text>
          </View>
        </View>
        
        <Text style={styles.stageText}>{safeStage}</Text>
        
        <View style={[styles.riskBadge, isHighRisk ? styles.badgeHigh : styles.badgeLow]}>
          <View style={[styles.riskDot, isHighRisk ? styles.dotHigh : styles.dotLow]} />
          <Text style={[styles.riskText, isHighRisk ? styles.textHigh : styles.textLow]}>{safeRiskLevel}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.noDataText}>{t('noHistory')}</Text>
          <Text style={styles.subNoData}>Complete an assessment to see tracking data here.</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id || Math.random().toString()}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#365347' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  noDataText: { fontSize: 20, fontWeight: '700', color: '#eff3fa', marginBottom: 10 },
  subNoData: { fontSize: 15, color: '#b8cae2', textAlign: 'center' },
  
  card: { backgroundColor: '#87a39f', padding: 20, borderRadius: 20, marginBottom: 16, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  dateText: { fontSize: 14, fontWeight: '700', color: '#01070f', textTransform: 'uppercase' },
  scoreBadge: { backgroundColor: '#EFF6FF', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12 },
  scoreBadgeText: { color: '#2563EB', fontWeight: '800', fontSize: 14 },
  
  stageText: { fontSize: 18, fontWeight: '700', color: '#f0ffde', marginBottom: 16 },
  
  riskBadge: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, alignSelf: 'flex-start' },
  badgeLow: { backgroundColor: '#F0FDF4' },
  badgeHigh: { backgroundColor: '#FEF2F2' },
  riskDot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
  dotLow: { backgroundColor: '#22C55E' },
  dotHigh: { backgroundColor: '#EF4444' },
  riskText: { fontSize: 14, fontWeight: '600' },
  textLow: { color: '#166534' },
  textHigh: { color: '#991B1B' }
});