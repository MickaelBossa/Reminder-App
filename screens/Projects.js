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
import { LinearGradient } from 'expo-linear-gradient';

export default function Projects(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Projets</Text>
        <View style={styles.emptyProject}>
          <Image
            source={require('../assets/folder.png')}
            style={styles.illustration}
          />
          <Text>Commencez par créer votre premier projet</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('AddProject')} >
            <LinearGradient
              colors={['#a996f2', '#8f79fc']}
              style={styles.addBtn}
            >
              <Text style={styles.addBtnText}>Créer un projet</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: Dimensions.get('window').width * 0.07,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').width * 0.05,
    marginTop:
      Platform.OS === 'android'
        ? Dimensions.get('window').width * 0.1
        : Dimensions.get('window').width * 0.05,
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
});
