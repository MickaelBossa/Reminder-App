import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import * as appActions from '../../store/actions/app';

export default function Note(props) {
  // Variables
  const dispatch = useDispatch();

  // Fonctions
  const onDeleteHandler = () => {
    dispatch(appActions.deleteNote(props.item.id));
  };

  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{props.item.content}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onDeleteHandler}>
        <Ionicons
          style={styles.closeIcon}
          name='close'
          size={16}
          color='#fff'
        />
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    backgroundColor: 'crimson',
    height: 20,
    width: 20,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
