import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../utils/LanguageContext';

export default function LanguageScreen({ onComplete }: any) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('selectLanguage')}</Text>
        <Text style={styles.subtitle}>Choose a language to begin</Text>

        <View style={styles.card}>
          {['en', 'ta', 'hi'].map((langCode) => {
            const labels: any = { en: t('english'), ta: t('tamil'), hi: t('hindi') };
            const isActive = language === langCode;
            
            return (
              <TouchableOpacity 
                key={langCode}
                activeOpacity={0.8}
                style={[styles.button, isActive && styles.selectedButton]} 
                onPress={() => setLanguage(langCode)}
              >
                <Text style={[styles.buttonText, isActive && styles.selectedText]}>
                  {labels[langCode]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.continueButton} onPress={onComplete}>
          <Text style={styles.continueText}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#365347' },
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: '#f4f7f3', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#d7dde7', textAlign: 'center', marginBottom: 40 },
  card: { backgroundColor: '#454746', padding: 20, borderRadius: 24, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 5, marginBottom: 30 },
  button: { backgroundColor: '#6ca785', paddingVertical: 18, borderRadius: 16, marginBottom: 12, borderWidth: 2, borderColor: 'transparent' },
  selectedButton: { borderColor: '#000d06', backgroundColor: '#4d7ea3' },
  buttonText: { fontSize: 18, textAlign: 'center', color: '#01060f', fontWeight: '600' },
  selectedText: { color: '#d7dce8', fontWeight: 'bold' },
  continueButton: { backgroundColor: '#1b3834', paddingVertical: 18, borderRadius: 16, shadowColor: '#4A90E2', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  continueText: { color: '#a9e3c6', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }
});