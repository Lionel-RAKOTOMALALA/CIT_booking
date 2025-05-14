import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import * as SMS from 'expo-sms';
import { fetchStudents, fetchLevels, saveMessage, Student } from '@/database/db';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Clock, History, Send } from 'lucide-react-native';
import { router } from 'expo-router';

const messageTemplates = [
  "Rappel: Cours annulé aujourd'hui.",
  "Information importante concernant votre cours.",
  "Changement de salle pour le cours de demain.",
  "Rappel: Remise du devoir pour demain.",
  "Réunion importante prévue cette semaine."
];

export default function MessagesScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  useEffect(() => {
    const loadData = async () => {
      try {
        const studentsData = await fetchStudents();
        const levelsData = await fetchLevels();
        
        setStudents(studentsData);
        setLevels(levelsData);
      } catch (error) {
        console.error('Error loading data:', error);
        Alert.alert('Erreur', 'Impossible de charger les données');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getFilteredStudents = () => {
    if (!selectedLevel) return students;
    return students.filter(student => student.level === selectedLevel);
  };

  const handleSendMessages = async () => {
    if (!message.trim()) {
      return Alert.alert('Message vide', 'Veuillez entrer un message');
    }

    const filteredStudents = getFilteredStudents();
    
    if (filteredStudents.length === 0) {
      return Alert.alert('Aucun destinataire', 'Aucun étudiant ne correspond aux critères sélectionnés');
    }

    const phoneNumbers = filteredStudents.map(student => student.phone);
    
    try {
      const isAvailable = await SMS.isAvailableAsync();
      
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(phoneNumbers, message);
        
        if (result === 'sent' || result === 'unknown') {
          // Save to message history
          await saveMessage(message, phoneNumbers.length);
          Alert.alert('Succès', `Message envoyé à ${phoneNumbers.length} étudiant(s)`);
          setMessage('');
        }
      } else {
        Alert.alert('Non disponible', 'SMS non disponible sur cet appareil');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('Erreur', "Une erreur s'est produite lors de l'envoi du SMS");
    }
  };

  const handleSelectTemplate = (template: string) => {
    setMessage(template);
  };

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </ThemedView>
    );
  }

  if (students.length === 0) {
    return (
      <ThemedView style={styles.container}>
        <Header title="Messages" />
        <EmptyState
          title="Aucun étudiant"
          description="Vous devez d'abord ajouter des étudiants avant de pouvoir envoyer des messages."
          action={{
            label: "Ajouter un étudiant",
            onPress: () => router.push('/add-student')
          }}
        />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Header 
        title="Messages" 
        showBack={false}
      />

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Card style={styles.messageCard}>
          <View style={styles.header}>
            <ThemedText type="defaultSemiBold">Envoyer un message</ThemedText>
            <TouchableOpacity 
              style={styles.historyButton}
              onPress={() => router.push('/message-history')}
            >
              <History size={20} color={colors.primary} />
              <ThemedText style={{ color: colors.primary }}>Historique</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.levelFilters}>
            <ThemedText type="small" style={styles.filterLabel}>Filtrer par niveau :</ThemedText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
              <TouchableOpacity
                style={[
                  styles.levelChip,
                  {
                    backgroundColor: !selectedLevel ? colors.primary : 'transparent',
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setSelectedLevel(null)}
              >
                <ThemedText
                  style={{
                    color: !selectedLevel ? '#FFFFFF' : colors.primary,
                    fontWeight: '500',
                  }}
                >
                  Tous
                </ThemedText>
              </TouchableOpacity>
              
              {levels.map((level) => (
                <TouchableOpacity
                  key={level}
                  style={[
                    styles.levelChip,
                    {
                      backgroundColor: selectedLevel === level ? colors.primary : 'transparent',
                      borderColor: colors.primary,
                    },
                  ]}
                  onPress={() => setSelectedLevel(level)}
                >
                  <ThemedText
                    style={{
                      color: selectedLevel === level ? '#FFFFFF' : colors.primary,
                      fontWeight: '500',
                    }}
                  >
                    {level}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.recipientInfo}>
            <ThemedText>
              Destinataires: {getFilteredStudents().length} étudiant(s)
            </ThemedText>
          </View>

          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Tapez votre message ici..."
            multiline
            numberOfLines={4}
            style={[styles.messageInput, {
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }]}
            placeholderTextColor={colors.inactive}
          />

          <View style={styles.templatesContainer}>
            <ThemedText type="small" style={styles.templateLabel}>Modèles de messages:</ThemedText>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.templatesScroll}
            >
              {messageTemplates.map((template, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.templateChip, { borderColor: colors.primary }]}
                  onPress={() => handleSelectTemplate(template)}
                >
                  <Clock size={14} color={colors.primary} />
                  <ThemedText style={{ fontSize: 14, color: colors.primary }}>
                    {template.length > 20 ? template.substring(0, 20) + '...' : template}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Button
            title="Envoyer le message"
            onPress={handleSendMessages}
            fullWidth
            disabled={getFilteredStudents().length === 0 || !message.trim()}
            style={styles.sendButton}
            icon={<Send size={16} color="#FFFFFF" />}
          />
        </Card>
      </ScrollView>
    </ThemedView>
  );
}

import { TextInput, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  messageCard: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  levelFilters: {
    marginBottom: 16,
  },
  filterLabel: {
    marginBottom: 8,
  },
  filtersScroll: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  levelChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
  recipientInfo: {
    marginBottom: 16,
  },
  messageInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  templatesContainer: {
    marginBottom: 20,
  },
  templateLabel: {
    marginBottom: 8,
  },
  templatesScroll: {
    flexDirection: 'row',
  },
  templateChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    gap: 4,
  },
  sendButton: {
    marginTop: 8,
  },
});