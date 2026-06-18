import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveToCloud } from './firebase';

const STORAGE_KEY = '@asd_scores';

export const saveScore = async (score: number, stageLabel: string, riskLevel: string) => {
  try {
    const profileJson = await AsyncStorage.getItem('@patient_profile');
    const profile = profileJson ? JSON.parse(profileJson) : { childName: 'Anonymous', parentName: 'Unknown', age: 'Unknown', gender: 'Unknown' };

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      score: score,
      stageTested: stageLabel,
      riskLevel: riskLevel,
      childName: profile.childName,
      parentName: profile.parentName,
      age: profile.age,
      gender: profile.gender
    };

    const existingScores = await getScores();
    const updatedScores = [newEntry, ...existingScores]; // Put newest at the top
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScores));

    // Send the complete detailed package to the Doctor's Firebase
    await saveToCloud("patient_assessments", newEntry);

    return true;
  } catch (error) {
    console.error('Error saving score:', error);
    return false;
  }
};

export const getScores = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    return [];
  }
};