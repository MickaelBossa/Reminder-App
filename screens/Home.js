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
} from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';

export default function Home() {
  // Variables
  const date = moment().format('LL');

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.cards}>
          <LinearGradient colors={['#ed89af', '#f45384']} style={styles.card}>
            <Text style={styles.cardNumber}>0</Text>
            <Text style={styles.cardText}>Notes</Text>
          </LinearGradient>

          <LinearGradient colors={['#fed3a0', '#ffa63e']} style={styles.card}>
            <Text style={styles.cardNumber}>0</Text>
            <Text style={styles.cardText}>Projets</Text>
          </LinearGradient>
        </View>

        <Text style={styles.title}>Notes (0)</Text>

        <Image source={require('../assets/empty.png')} style={styles.image} />
        <Text>
          Commencez par créer votre premier projet pour ajouter votre première
          note ensuite
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient colors={['#a996f2', '#8f79fc']} style={styles.addBtn}>
            <Text style={styles.addBtnText}>Voir mes projets</Text>
          </LinearGradient>
        </TouchableOpacity>
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
