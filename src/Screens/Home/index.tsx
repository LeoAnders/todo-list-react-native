import { useState } from "react";
import { styles } from './styles'
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

export function Home() {
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

      <View style={styles.emptyList}>
        <Image
          source={require('../../assets/clipboard.png')}
          style={styles.clipboard}
        />
        <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
