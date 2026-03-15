import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const FILTERS = [
  { key: 'all', label: 'Vše' },
  { key: 'active', label: 'Aktivní' },
  { key: 'completed', label: 'Splněné' },
];

export default function FilterBar({ filter, onFilterChange }) {
  return (
    <View style={styles.container}>
      {FILTERS.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          style={[styles.button, filter === key && styles.buttonActive]}
          onPress={() => onFilterChange(key)}
        >
          <Text style={[styles.label, filter === key && styles.labelActive]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  buttonActive: {
    backgroundColor: '#E3F2FD',
  },
  label: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
  },
  labelActive: {
    color: '#2196F3',
    fontWeight: '700',
  },
});
