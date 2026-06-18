import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../utils/LanguageContext';
import { saveScore } from '../utils/storage';

export default function AssessmentScreen({ navigation }: any) {
  const { t } = useLanguage();
  const stages = t('stages'); 

  const [selectedStage, setSelectedStage] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = async (scoreValue: number) => {
    const newScore = totalScore + scoreValue;
    
    if (currentQuestion < selectedStage.questions.length - 1) {
      setTotalScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTotalScore(newScore);
      setIsFinished(true);
      const riskLevel = newScore >= selectedStage.threshold ? t('highRisk') : t('lowRisk');
      await saveScore(newScore, selectedStage.label, riskLevel);
    }
  };

  const resetTest = () => {
    setSelectedStage(null);
    setCurrentQuestion(0);
    setTotalScore(0);
    setIsFinished(false);
  };

  if (!selectedStage) {
    return (
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <Text style={styles.title}>{t('selectStage')}</Text>
          <Text style={styles.subtitle}>Select the timeline that matches the child's current age.</Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {stages.map((stage: any, index: number) => (
            <TouchableOpacity activeOpacity={0.8} key={index} style={styles.stageButton} onPress={() => setSelectedStage(stage)}>
              <View style={styles.stageIcon}><Text style={styles.stageIconText}>{stage.id.toUpperCase()}</Text></View>
              <Text style={styles.stageButtonText}>{stage.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  if (isFinished) {
    const isHighRisk = totalScore >= selectedStage.threshold;
    return (
      <View style={styles.container}>
        <View style={styles.resultCard}>
          <Text style={styles.completeTitle}>{t('assessmentComplete')}</Text>
          <Text style={styles.stageTestedText}>Tested: {selectedStage.label}</Text>
          
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreNumber}>{totalScore}</Text>
            <Text style={styles.scoreLabel}>{t('yourScore')}</Text>
          </View>
          
          <View style={[styles.riskBox, isHighRisk ? styles.riskHigh : styles.riskLow]}>
            <Text style={[styles.riskLabel, isHighRisk ? styles.riskLabelHigh : styles.riskLabelLow]}>{t('riskLevel')}</Text>
            <Text style={[styles.riskText, isHighRisk ? styles.riskTextHigh : styles.riskTextLow]}>
              {isHighRisk ? t('highRisk') : t('lowRisk')}
            </Text>
          </View>
          
          <TouchableOpacity activeOpacity={0.8} style={styles.primaryButton} onPress={() => { resetTest(); navigation.navigate('History'); }}>
            <Text style={styles.primaryButtonText}>{t('viewHistoryBtn')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.secondaryButton} onPress={resetTest}>
            <Text style={styles.secondaryButtonText}>{t('retakeBtn')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const question = selectedStage.questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / selectedStage.questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{t('questionProgress')} {currentQuestion + 1} {t('of')} {selectedStage.questions.length}</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
        </View>
      </View>
      
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {question.options.map((option: string, index: number) => (
          <TouchableOpacity activeOpacity={0.8} key={index} style={styles.optionButton} onPress={() => handleAnswer(question.scores[index])}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#365347' },
  headerBox: { marginBottom: 30, marginTop: 10 },
  title: { fontSize: 26, fontWeight: '800', color: '#c6d1e2', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#b8c5d7' },
  stageButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#a3b7b4', padding: 16, borderRadius: 16, marginBottom: 12, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  stageIcon: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#51787a', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  stageIconText: { color: '#c0d0e3', fontWeight: 'bold', fontSize: 16 },
  stageButtonText: { fontSize: 18, color: '#334155', fontWeight: '600' },
  
  progressContainer: { marginBottom: 30 },
  progressText: { fontSize: 14, fontWeight: '700', color: '#64748B', marginBottom: 10, textTransform: 'uppercase' },
  progressBarBg: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#4A90E2', borderRadius: 4 },
  
  questionCard: { backgroundColor: '#FFFFFF', padding: 30, borderRadius: 24, marginBottom: 30, shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  questionText: { fontSize: 22, fontWeight: '700', color: '#1E293B', lineHeight: 32 },
  
  optionButton: { backgroundColor: '#FFFFFF', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E2E8F0', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 1 },
  optionText: { fontSize: 17, color: '#4A90E2', fontWeight: '600', textAlign: 'center' },
  
  resultCard: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, alignItems: 'center', shadowColor: '#94A3B8', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 20, elevation: 8 },
  completeTitle: { fontSize: 24, fontWeight: '800', color: '#1E293B', marginBottom: 5 },
  stageTestedText: { fontSize: 16, color: '#64748B', marginBottom: 30, fontWeight: '500' },
  scoreCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#EFF6FF', justifyContent: 'center', alignItems: 'center', marginBottom: 30, borderWidth: 4, borderColor: '#BFDBFE' },
  scoreNumber: { fontSize: 48, fontWeight: '900', color: '#2563EB' },
  scoreLabel: { fontSize: 14, color: '#64748B', fontWeight: '600', textTransform: 'uppercase' },
  
  riskBox: { width: '100%', padding: 20, borderRadius: 16, marginBottom: 30, alignItems: 'center' },
  riskHigh: { backgroundColor: '#FEF2F2', borderWidth: 1, borderColor: '#FECACA' },
  riskLow: { backgroundColor: '#F0FDF4', borderWidth: 1, borderColor: '#BBF7D0' },
  riskLabel: { fontSize: 14, fontWeight: '700', marginBottom: 6, textTransform: 'uppercase' },
  riskLabelHigh: { color: '#991B1B' },
  riskLabelLow: { color: '#166534' },
  riskText: { fontSize: 16, fontWeight: '500', textAlign: 'center', lineHeight: 24 },
  riskTextHigh: { color: '#B91C1C' },
  riskTextLow: { color: '#15803D' },
  
  primaryButton: { width: '100%', backgroundColor: '#4A90E2', padding: 18, borderRadius: 16, marginBottom: 12, alignItems: 'center' },
  primaryButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  secondaryButton: { width: '100%', backgroundColor: '#F8FAFC', padding: 18, borderRadius: 16, alignItems: 'center' },
  secondaryButtonText: { color: '#64748B', fontSize: 18, fontWeight: 'bold' }
});