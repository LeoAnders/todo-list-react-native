import React from 'react';
import { styles } from './styles'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { MaterialIcons as CheckIcon } from '@expo/vector-icons';

interface Props {
  title: string;
  done: boolean;
  onToggleDone: () => void;
  onRemove: () => void;
}

export default function Task({ title, done, onToggleDone, onRemove }: Props) {
  return (
    <View style={[styles.container, done && styles.containerDone]}>
      <TouchableOpacity onPress={onToggleDone} style={styles.checkbox}>
        {done ? (
          <CheckIcon name="check-circle" size={24} color="#5E60CE" />
        ) : (
          <Icon name="circle" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, done && styles.textDone]}>
        {title}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Icon name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}