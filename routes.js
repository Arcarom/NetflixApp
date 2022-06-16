import React from 'react';

import Login from './Src/Pages/Login';
import Home from './Src/Pages/home';
import Filme from './Src/Pages/filme';
import Serie from './Src/Pages/Séries';
import PaginaFake from './Src/Pages/paginaFake';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{backgroundColor: '#141414'}}
      shifting={false}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'início',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EmBreve"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={PaginaFake}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Filme"
          component={Filme}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Serie"
          component={Serie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
