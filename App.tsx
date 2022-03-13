import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TailwindProvider} from 'tailwind-rn/dist';
import utilities from './tailwind.json';

import WeatherApp from './src/pages/WeatherApp';
import SettingsPage from './src/pages/Settings';

/**
 * @description Typings for our navigation. Whenever we only pass navigation
 * prop, declare the type as undefined. Whenever we pass additional stuff, use
 * that stuffs type.
 */
export type RootStackParamList = {
  // a screen that we can navigate to and that we don't pass any props to
  WeatherApp: undefined;
  // navigating to, in the current screen,
  // that we should pass a prop named `slug` to it
  // a screen that we are
  // Settings: {slug: string};
  // Sellers: {data: Array<string>};

  // a screen that we can navigate to and that we don't pass any props to
  Settings: undefined;
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen
            name="WeatherApp"
            component={WeatherApp}
            options={{title: 'Libre Weather'}}
          />
          <Stack.Screen name="Settings" component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
