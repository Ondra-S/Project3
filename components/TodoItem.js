import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={() => onToggle(todo.id)}>
        <View style={[styles.checkCircle, todo.completed && styles.checkCircleDone]}>
          {todo.completed && <Text style={styles.checkMark}>✓</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => onToggle(todo.id)}>
        <Text style={[styles.text, todo.completed && styles.textDone]}>{todo.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(todo.id)}>
        <Text style={styles.deleteText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleDone: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#212121',
  },
  textDone: {
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  deleteBtn: {
    paddingLeft: 12,
    paddingVertical: 4,
  },
  deleteText: {
    fontSize: 18,
  },
});
