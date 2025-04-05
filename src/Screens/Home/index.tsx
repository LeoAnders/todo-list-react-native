import { useState } from "react";
import { styles } from './styles'
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Task from "@/src/components/Task";

export function Home() {

  const tasks = [
    { id: '1', text: 'Estudar React Native', completed: false },
    { id: '2', text: 'Estudar React', completed: true },
    { id: '3', text: 'Estudar Node.js', completed: false },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={{ color: '#4EA8DE' }}>to</Text>
          <Text style={{ color: '#8284FA' }}>do</Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>＋</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.created}>Criadas <Text style={styles.counter}>0</Text></Text>
        <Text style={styles.done}>Concluídas <Text style={styles.counter}>0</Text></Text>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            title={item.text}
            done={item.completed}
            onToggleDone={() => { }}
            onRemove={() => { }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image
              source={require('../../assets/clipboard.png')}
              style={styles.clipboard}
            />
            <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}