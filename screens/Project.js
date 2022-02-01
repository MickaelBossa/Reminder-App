// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

// Composants
import Note from '../components/Note/Note';

export default function Project(props) {
  // Variables
  const project = props.route.params.item;
  const notes = useSelector((state) => state.notes).filter(
    (note) => note.projectId == project.id,
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.goBack()}
        >
          <View style={styles.backButton}>
            <Ionicons name='arrow-back' size={23} color='white' />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{project.name}</Text>

        {notes[0] ? (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('AddNote', { project: project })
              }
              style={{ marginBottom: 30 }}
            >
              <View style={styles.smallAddBtn}>
                <Text style={styles.smallAddBtnText}>Ajouter une note</Text>
              </View>
            </TouchableOpacity>
            <FlatList
              data={notes}
              renderItem={({ item }) => <Note item={item} />}
            />
          </>
        ) : (
          <>
            <Image
              source={require('../assets/empty.png')}
              style={styles.image}
            />
            <Text>Commencez par ajouter une note pour ce projet</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('AddNote', { project: project })
              }
            >
              <LinearGradient
                colors={['#a996f2', '#8f79fc']}
                style={styles.addButton}
              >
                <Text style={styles.addButtonText}>Ajouter une note</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 25,
  },
  backButton: {
    backgroundColor: Colors.primary,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 50 : 0,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  image: {
    width: 350,
    height: 200,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  smallAddBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 140,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
  },
  smallAddBtnText: {
    color: '#fff',
  },
});
