import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet} from 'react-native';
import SavedRecipes from '../screens/SavedRecipes';
import DetailsRecipes from '../screens/DetailsRecipes';
import Screen1 from '../screens/HomeScreen';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Notifications';
import Screen4 from '../screens/Profile';
import Filter from '../screens/Filter';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ChangeInfo from '../screens/ChangeInfo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SavedRecipesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SavedRecipes"
      component={SavedRecipes}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DetailsRecipes"
      component={DetailsRecipes}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Screen1Stack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Screen1"
      component={Screen1}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Filter"
      component={Filter}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Screen4Stack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Screen4"
      component={Screen4}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChangeInfo"
      component={ChangeInfo}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarStyle: {display: 'flex'},
      tabBarIcon: ({focused}) => {
        let iconSource;

        if (route.name === 'Screen1Stack') {
          iconSource = focused
            ? require('../assets/img/homeActive.png')
            : require('../assets/img/home.png');
        } else if (route.name === 'SavedRecipesTab') {
          iconSource = focused
            ? require('../assets/img/bookmarkActive.png')
            : require('../assets/img/bookmark.png');
        } else if (route.name === 'Screen2') {
          iconSource = require('../assets/img/add.png');
        } else if (route.name === 'Screen3') {
          iconSource = focused
            ? require('../assets/img/bellActive.png')
            : require('../assets/img/bell.png');
        } else if (route.name === 'Screen4Stack') {
          iconSource = focused
            ? require('../assets/img/userActive.png')
            : require('../assets/img/user.png');
        }

        if (!iconSource) {
          console.warn(`Image source for route ${route.name} doesn't exist`);
          return null;
        }

        return (
          <Image
            source={iconSource}
            style={[
              styles.icon,
              route.name === 'Screen2' && styles.selectedIcon,
            ]}
          />
        );
      },
    })}>
    <Tab.Screen
      name="Screen1Stack"
      component={Screen1Stack}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="SavedRecipesTab"
      component={SavedRecipesStack}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Screen2"
      component={Screen2}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Screen3"
      component={Screen3}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Screen4Stack"
      component={Screen4Stack}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Navigation"
      component={TabNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return <AppStack />;
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  selectedIcon: {
    borderWidth: 2,
    backgroundColor: '#129575',
    borderRadius: 50,
    marginBottom: 30,
    width: 50,
    height: 50,
  },
});

export default Navigation;
