import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo et nom d'école alignés horizontalement */}
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI CENTRE</Text>
      </View>
      
      {/* Informations étudiant */}
      <View style={styles.info}>
        <Text style={styles.label}>Nom : <Text style={styles.value}>Bennani</Text></Text>
        <Text style={styles.label}>Prénom : <Text style={styles.value}>Sara</Text></Text>
        <Text style={styles.label}>Année universitaire : <Text style={styles.value}>2025 / 2026</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 10,
    flex : 1,
    marginLeft: 20
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },
  info: {
    alignItems: 'flex-start',
    gap: 12,
    width: '100%',
    maxWidth: 300,
  },
  label: {
    fontSize: 18,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
    color: '#2563eb',
  },
});