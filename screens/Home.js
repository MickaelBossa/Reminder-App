// Librairies
import React, { useEffect } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as appActions from '../store/actions/app';

// Composants
import Note from '../components/Note/Note';

export default function Home(props) {
  // Variables
  const date = moment().format('LL');
  const notes = useSelector((state) => state.notes);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const loadedNotes = useSelector((state) => state.loadedNotes);

  // Cycle de vie
  useEffect(() => {
    dispatch(appActions.getNotes());
    dispatch(appActions.getProjects());
  }, []);

  if (loadedNotes) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.cards}>
          <LinearGradient colors={['#ed89af', '#f45384']} style={styles.card}>
            <Text style={styles.cardNumber}>{notes.length}</Text>
            <Text style={styles.cardText}>Notes</Text>
          </LinearGradient>

          <LinearGradient colors={['#fed3a0', '#ffa63e']} style={styles.card}>
            <Text style={styles.cardNumber}>{projects.length}</Text>
            <Text style={styles.cardText}>Projets</Text>
          </LinearGradient>
        </View>

        <Text style={styles.title}>Notes ({notes.length})</Text>

        {!notes[0] ? (
          <>
            <Image
              source={require('../assets/empty.png')}
              style={styles.image}
            />
            <Text>
              Commencez par créer votre premier projet pour ajouter votre
              première note ensuite
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('TabProjects')}
            >
              <LinearGradient
                colors={['#a996f2', '#8f79fc']}
                style={styles.addBtn}
              >
                <Text style={styles.addBtnText}>Voir mes projets</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => <Note item={item} />}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
  },
  date: {
    fontSize: Dimensions.get('window').width * 0.07,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').width * 0.05,
    marginTop:
      Platform.OS === 'android'
        ? Dimensions.get('window').width * 0.1
        : Dimensions.get('window').width * 0.05,
  },
  cards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: Dimensions.get('window').width * 0.42,
    height: Dimensions.get('window').height * 0.2,
    padding: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').width * 0.05,
    borderRadius: Dimensions.get('window').width * 0.05,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cardNumber: {
    fontSize: Dimensions.get('window').width * 0.13,
    color: '#fff',
  },
  cardText: {
    color: '#fff',
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').width * 0.15,
    marginBottom: Dimensions.get('window').width * 0.05,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.27,
  },
  addBtn: {
    padding: Dimensions.get('window').width * 0.025,
    borderRadius: Dimensions.get('window').width * 0.015,
    marginTop: Dimensions.get('window').width * 0.075,
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: Dimensions.get('window').width * 0.05,
  },
});
