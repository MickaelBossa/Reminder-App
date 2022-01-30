// Librairies
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';

export default function AddNote(props) {
  // Variables
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Ajouter une note</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.projectName}>Projet</Text>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder='Tapez quelque chose'
                value={value}
                onChangeText={(value) => onChange(value)}
                multiline={true}
                style={styles.input}
              />
            )}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.submit}>
          <Text style={styles.submitText}>Ajouter</Text>
          <Ionicons name='arrow-forward' size={23} color={'white'} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.close}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name='close' size={23} color='white' />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryFaded,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: Platform.OS === 'android' ? 50 : 30,
    alignSelf: 'center',
  },
  close: {
    backgroundColor: Colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    maxHeight: 150,
    fontSize: 16,
  },
  submit: {
    backgroundColor: Colors.primary,
    padding: 10,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 17,
  },
  projectName: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
