import { useState } from "react";
import { styles } from './styles'
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Task from "@/src/components/Task";

export function Home() {
  type Task = {
    id: string;
    title: string;
    done: boolean;
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const newTaskObject = {
    id: String(Math.random()),
    title: newTask,
    done: false,
  };

  function handleAddTask() {

    setTasks(prevState => [...prevState, newTaskObject])
    setNewTask('');
  }

  function handleTaskRemove(id: string) {
    Alert.alert("Remover", "Deseja remover a tarefa", [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter((task: Task) => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleToggleTaskDone(id: string) {
    setTasks(prevState =>
      prevState.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

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
          placeholder="Adicione uma nova tarefa?"
          placeholderTextColor="#808080"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
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
            title={item.title}
            done={item.done}
            onToggleDone={() => handleToggleTaskDone(item.id)}
            onRemove={() => handleTaskRemove(item.id)}
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