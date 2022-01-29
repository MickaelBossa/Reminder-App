// Librairies
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

// Navigateurs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Ecrans
import HomeScreen from '../screens/Home';
import ProjectsScreen from '../screens/Projects';
import ProjectScreen from '../screens/Project';
import AddNoteScreen from '../screens/AddNote';
import AddProjectScreen from '../screens/AddProject';

// AppModalsNavigators
const ModalsNavigator = createStackNavigator();

export const AppModalsNavigators = () => {
  return (
    <ModalsNavigator.Navigator screenOptions={{ presentation: 'modal' }}>
      <ModalsNavigator.Screen
        name='App'
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      <ModalsNavigator.Screen
        name='AddNote'
        component={AddNoteScreen}
        options={{ headerShown: false }}
      />
      <ModalsNavigator.Screen
        name='AddProject'
        component={AddProjectScreen}
        options={{ headerShown: false }}
      />
    </ModalsNavigator.Navigator>
  );
};

// AppTabNavigator
const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TabHome') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'TabProjects') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primary,
        headerShown: false,
      })}
      initialRouteName='TabHome'
    >
      <TabNavigator.Screen
        name='TabHome'
        component={HomeScreen}
        options={{ title: 'Notes' }}
      />
      <TabNavigator.Screen
        name='TabProjects'
        component={ProjectsStackNavigator}
        options={{ title: 'Projets' }}
      />
    </TabNavigator.Navigator>
  );
};

// ProjectsStackNavigator
const ProjectsNavigator = createStackNavigator();

const ProjectsStackNavigator = () => {
  return (
    <ProjectsNavigator.Navigator>
      <ProjectsNavigator.Screen
        name='Projects'
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
      <ProjectsNavigator.Screen
        name='Project'
        component={ProjectScreen}
        options={{ headerShown: false }}
      />
    </ProjectsNavigator.Navigator>
  );
};
