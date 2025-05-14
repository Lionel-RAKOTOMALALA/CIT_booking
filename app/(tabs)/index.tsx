import { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, RefreshControl } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Student, fetchStudents } from '@/database/db';
import { StudentItem } from '@/components/StudentItem';
import { Header } from '@/components/Header';
import { StudentEmptyState } from '@/components/EmptyState';
import { useFocusEffect } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function StudentsScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const loadStudents = async () => {
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadStudents();
  };

  // Load students when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadStudents();
    }, [])
  );

  // Initial load
  useEffect(() => {
    loadStudents();
  }, []);

  const renderItem = ({ item }: { item: Student }) => (
    <StudentItem student={item} onDelete={loadStudents} />
  );

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Header title="Étudiants ENI" showAdd />
      
      {students.length === 0 ? (
        <StudentEmptyState />
      ) : (
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.primary]}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
});