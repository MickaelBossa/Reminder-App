// Librairies
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './store/reducers/app';
import thunk from 'redux-thunk';

// Composants
import AppNavigator from './navigation/AppNavigator';

const store = createStore(appReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
