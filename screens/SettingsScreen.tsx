import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../utils/LanguageContext';

export default function SettingsScreen() {
  const { t, language, setLanguage } = useLanguage();

  const handleClearHistory = () => {
    Alert.alert(
      t('clearHistory'),
      t('clearWarning'),
      [
        { text: t('cancel'), style: 'cancel' },
        { 
          text: t('delete'), 
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem('@asd_scores');
            Alert.alert("Success", t('historyCleared'));
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('changeLanguage')}</Text>
        <View style={styles.cardGroup}>
          {[
            { id: 'en', label: 'English' },
            { id: 'ta', label: 'தமிழ்' },
            { id: 'hi', label: 'हिंदी' }
          ].map((lang, index) => (
            <TouchableOpacity 
              key={lang.id}
              activeOpacity={0.7}
              style={[styles.listItem, index !== 2 && styles.listItemBorder]} 
              onPress={() => setLanguage(lang.id)}
            >
              <Text style={[styles.listText, language === lang.id && styles.listTextActive]}>{lang.label}</Text>
              {language === lang.id && <View style={styles.activeDot} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('dataManagement')}</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.dangerCard} onPress={handleClearHistory}>
          <Text style={styles.dangerText}>{t('clearHistory')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('aboutApp')}</Text>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>{t('disclaimerFull')}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#365347', padding: 20 },
  section: { marginBottom: 32 },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#d3deef', marginBottom: 10, textTransform: 'uppercase', paddingLeft: 10 },
  
  cardGroup: { backgroundColor: '#a1ae9e', borderRadius: 20, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  listItemBorder: { borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  listText: { fontSize: 16, color: '#010812', fontWeight: '500' },
  listTextActive: { color: '#145954', fontWeight: '700' },
  activeDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#4A90E2' },

  dangerCard: { backgroundColor: '#a1ae9e', padding: 20, borderRadius: 20, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3, alignItems: 'center' },
  dangerText: { color: '#8c1111', fontSize: 16, fontWeight: '700' },

  disclaimerBox: { backgroundColor: '#a1ae9e', padding: 24, borderRadius: 20, borderWidth: 1, borderColor: '#DBEAFE' },
  disclaimerText: { fontSize: 14, color: '#040917', lineHeight: 22 }
});