# Multilingual ASD Longitudinal Screening Application

A high-fidelity, offline-first mobile application built with React Native and Expo Go designed for longitudinal Autism Spectrum Disorder (ASD) risk screening in pediatric care. The application enables parents and clinical stakeholders to systematically track developmental milestones across varying pediatric age stages with dynamic, age-specific scoring thresholds.

## 🚀 Key Features

- **Longitudinal Milestone Tracking**: Dynamic assessment modules segmented by precise developmental stages (ranging from early infancy up to 4 years), isolating age-specific clinical behavioral markers.
- **Dynamic Risk Evaluation**: Automated risk stratification based on variable clinical thresholds unique to each developmental timeline.
- **Dual-Layer Storage Architecture**: 
  - **Local Persistence**: Full offline functionality powered by `@react-native-async-storage/async-storage` for localized historical performance tracking.
  - **Cloud Synchronization**: Real-time server-side synchronization with a secure **Firebase Firestore** backend database for unified clinical review.
- **Comprehensive Internationalization (i18n)**: Fully localized UI components and clinical questionnaire arrays matching native dialects across **English, Tamil (தமிழ்), and Hindi (हिंदी)**.
- **Calm & Accessible UI/UX**: Custom-engineered design system optimized for neurodivergent and clinical contexts, utilizing low-stimulus palettes, distinct visual hierarchy, and full software-overlay bezel compensation.

## 🛠️ Tech Stack & Architecture

- **Framework**: React Native (Expo Go Managed Workflow)
- **Language**: TypeScript (Strict Type Checking)
- **Database Backend**: Firebase Firestore Cloud Database
- **Local Cache**: AsyncStorage
- **Navigation**: React Navigation (Bottom Tab Native Architecture)

## 📦 Installation & Local Deployment

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and the [Expo Go](https://expo.dev/client) app installed on your physical mobile testing device.

### 1. Clone the Repository
```bash
git clone [https://github.com/Drew-Jeff/AsdScreening.git](https://github.com/Drew-Jeff/AsdScreening.git)
cd AsdScreening
