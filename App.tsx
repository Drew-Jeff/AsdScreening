import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import LanguageScreen from './screens/LanguageScreen';
import { LanguageProvider, useLanguage } from './utils/LanguageContext';

import AssessmentScreen from './screens/AssessmentScreen';
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MainApp() {
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const { t } = useLanguage(); 

  if (!hasSelectedLanguage) {
    return <LanguageScreen onComplete={() => setHasSelectedLanguage(true)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#8ba791', shadowOpacity: 0, elevation: 0 },
          headerTitleStyle: { color: '#eaf1f7', fontWeight: 'bold' },
          tabBarStyle: { 
            backgroundColor: '#6b8f74', 
            borderTopWidth: 0, 
            elevation: 10, 
            shadowColor: '#000', 
            shadowOpacity: 0.05, 
            shadowRadius: 10, 
            height: 80,          // Increased height so it doesn't get squished
            paddingBottom: 25,   // Pushes the icons/text UP away from the Android buttons
            paddingTop: 10 
          },
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: '#cadaf1',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: t('homeTab') }} />
        <Tab.Screen name="Assessment" component={AssessmentScreen} options={{ title: t('assessmentTab') }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ title: t('historyTab') }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: t('settingsTab') }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}