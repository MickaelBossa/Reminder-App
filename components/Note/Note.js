import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function Note(props) {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{props.item.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    backgroundColor: '#fff',
    padding: 15,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 7,
  },
});
