import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/home-screen';
import SearchScreen from '../screens/search-screen';
import MovieDetailsScreen from '../screens/movie-details-screen';
import WatchListScreen from '../screens/watch-list-screen';
import darkTheme from '../theme/darkTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  GoBackArrowLeft,
  InfoOutline,
  HomeTabBar,
  SearchTabBar,
  DetailsBookmark,
  WatchListTabBar,
} from '../common/components/Navigations';

const BottomTab = createBottomTabNavigator();

var BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => <HomeTabBar color={color} />,
        })}
      />

      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({navigation}) => ({
          headerStyle: {
            shadowOpacity: 0,
          },
          title: 'Search',
          tabBarIcon: ({color}) => <SearchTabBar color={color} />,
          headerRight: () => <InfoOutline />,
          headerLeft: () => <GoBackArrowLeft />,
        })}
      />
      <BottomTab.Screen
        name="WatchListScreen"
        component={WatchListScreen}
        options={({navigation}) => ({
          title: 'Watch list',
          headerStyle: {
            shadowOpacity: 0,
          },
          tabBarIcon: ({color}) => <WatchListTabBar color={color} />,
          headerRight: () => <InfoOutline />,
          headerLeft: () => <GoBackArrowLeft />,
        })}
      />
    </BottomTab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={({route, navigation}) => {
          return {
            title: 'Detail',
            headerStyle: {
              shadowOpacity: 0,
            },
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-search-outline" size={24} color={color} />
            ),
            headerRight: () => <DetailsBookmark data={route.params} />,
            headerLeft: () => <GoBackArrowLeft />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = ({colorScheme}: {colorScheme: ColorSchemeName}) => {
  return (
    <NavigationContainer theme={darkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
