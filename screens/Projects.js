// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import * as appActions from '../store/actions/app';

export default function Projects(props) {
  // Variables
  const projects = useSelector((state) => state.projects);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  // Fonctions
  const onDeleteHandler = (projectId) => {
    const notesForProject = notes.filter((note) => note.projectId == projectId);
    notesForProject.forEach((note) => dispatch(appActions.deleteNote(note.id)));
    dispatch(appActions.deleteProject(projectId));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.containerProject}>
          <Text style={styles.title}>Projets</Text>
          {projects[0] && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('AddProject')}
            >
              <View style={styles.smallAddButton}>
                <Text style={styles.smallAddButtonText}>Ajouter</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {!projects[0] ? (
          <View style={styles.emptyProject}>
            <Image
              source={require('../assets/folder.png')}
              style={styles.illustration}
            />
            <Text>Commencez par créer votre premier projet</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('AddProject')}
            >
              <LinearGradient
                colors={['#a996f2', '#8f79fc']}
                style={styles.addBtn}
              >
                <Text style={styles.addBtnText}>Créer un projet</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={projects}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  props.navigation.navigate('Project', { item: item })
                }
              >
                <View style={styles.project}>
                  <Text style={styles.projectText}>{item.name}</Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onDeleteHandler(item.id)}
                  >
                    <Ionicons
                      style={styles.closeIcon}
                      name='close'
                      size={16}
                      color='#fff'
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Dimensions.get('window').width * 0.05,
  },
  containerProject: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').width * 0.05,
    marginTop:
      Platform.OS === 'android'
        ? Dimensions.get('window').width * 0.1
        : Dimensions.get('window').width * 0.05,
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.07,
    fontWeight: 'bold',
  },
  emptyProject: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.25,
  },
  addBtn: {
    padding: Dimensions.get('window').height * 0.02,
    borderRadius: Dimensions.get('window').height * 0.01,
    marginTop: Dimensions.get('window').height * 0.04,
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: Dimensions.get('window').height * 0.02,
  },
  project: {
    backgroundColor: Colors.primaryFaded,
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectText: {
    fontSize: 17,
  },
  smallAddButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 70,
    borderRadius: 15,
    backgroundColor: Colors.primary,
  },
  smallAddButtonText: {
    color: '#fff',
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
