import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../utils/LanguageContext';

export default function HomeScreen() {
  const { t } = useLanguage();
  
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      const savedProfile = await AsyncStorage.getItem('@patient_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        setChildName(parsed.childName || '');
        setParentName(parsed.parentName || '');
        setAge(parsed.age || '');
        setGender(parsed.gender || '');
        setIsProfileComplete(true);
      }
    };
    loadProfile();
  }, []);

  const handleSave = async () => {
    if(!childName || !parentName) return Alert.alert("Required", "Please fill in the names.");
    const profileData = { childName, parentName, age, gender };
    await AsyncStorage.setItem('@patient_profile', JSON.stringify(profileData));
    setIsProfileComplete(true);
  };

  if (isProfileComplete) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.dashboardCard}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{childName.charAt(0).toUpperCase()}</Text>
            </View>
            <Text style={styles.welcomeText}>{t('welcomeBack')}</Text>
            <Text style={styles.childNameText}>{childName}</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>{t('parentName')}</Text>
              <Text style={styles.detailValue}>{parentName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>{t('age')}</Text>
              <Text style={styles.detailValue}>{age} Years</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>{t('gender')}</Text>
              <Text style={styles.detailValue}>{gender === 'Boy' ? t('boy') : t('girl')}</Text>
            </View>
            
            <TouchableOpacity activeOpacity={0.7} style={styles.editButton} onPress={() => setIsProfileComplete(false)}>
              <Text style={styles.editButtonText}>{t('editProfile')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.formCard}>
          <Text style={styles.header}>{t('accountDetails')}</Text>
          <Text style={styles.subHeader}>Enter details to personalize assessments.</Text>

          <Text style={styles.label}>{t('childName')}</Text>
          <TextInput style={styles.input} value={childName} onChangeText={setChildName} placeholder="E.g. Alex" placeholderTextColor="#94A3B8" />

          <Text style={styles.label}>{t('parentName')}</Text>
          <TextInput style={styles.input} value={parentName} onChangeText={setParentName} placeholder="E.g. Sarah" placeholderTextColor="#94A3B8" />

          <Text style={styles.label}>{t('age')}</Text>
          <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" placeholder="Age in years" placeholderTextColor="#94A3B8" />

          <Text style={styles.label}>{t('gender')}</Text>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.8} style={[styles.genderBtn, gender === 'Boy' && styles.selectedGender]} onPress={() => setGender('Boy')}>
              <Text style={[styles.genderText, gender === 'Boy' && styles.selectedGenderText]}>{t('boy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[styles.genderBtn, gender === 'Girl' && styles.selectedGender]} onPress={() => setGender('Girl')}>
              <Text style={[styles.genderText, gender === 'Girl' && styles.selectedGenderText]}>{t('girl')}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>{t('saveProfile')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#365247' },
  scroll: { padding: 20, flexGrow: 1, justifyContent: 'center' },
  dashboardCard: { backgroundColor: '#93b599', padding: 30, borderRadius: 24, alignItems: 'center', shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 20, elevation: 8 },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#011701', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: '#75cba2' },
  welcomeText: { fontSize: 16, color: '#040d19', fontWeight: '500', marginBottom: 4 },
  childNameText: { fontSize: 28, fontWeight: '800', color: '#0a0c0f', marginBottom: 20 },
  divider: { height: 1, width: '100%', backgroundColor: '#01120b', marginBottom: 20 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 8 },
  detailLabel: { fontSize: 16, color: '#072044', fontWeight: '500' },
  detailValue: { fontSize: 16, color: '#234f9c', fontWeight: '700' },
  editButton: { marginTop: 30, backgroundColor: '#0e0e0e', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  editButtonText: { color: '#ced4db', fontWeight: '700', fontSize: 16 },
  
  formCard: { backgroundColor: '#6c94b0', padding: 24, borderRadius: 24, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 5 },
  header: { fontSize: 24, fontWeight: '800', color: '#1E293B', marginBottom: 5 },
  subHeader: { fontSize: 14, color: '#0e0e0f', marginBottom: 25 },
  label: { fontSize: 14, color: '#060a0e', marginBottom: 8, fontWeight: '600' },
  input: { backgroundColor: '#F8FAFC', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 20, fontSize: 16, color: '#1E293B' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  genderBtn: { flex: 1, backgroundColor: '#F8FAFC', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0', marginHorizontal: 5, alignItems: 'center' },
  selectedGender: { borderColor: '#4A90E2', backgroundColor: '#EFF6FF', borderWidth: 2 },
  genderText: { fontSize: 16, color: '#64748B', fontWeight: '600' },
  selectedGenderText: { color: '#2563EB', fontWeight: '800' },
  saveButton: { backgroundColor: '#12253a', padding: 18, borderRadius: 16, alignItems: 'center', shadowColor: '#4A90E2', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
  saveButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }
});