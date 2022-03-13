import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useTailwind} from 'tailwind-rn/dist';
import {RootStackParamList} from '../../App';
import {Icon} from 'react-native-elements';

import useStore from '../components/GlobalState';

interface IWeatherAppPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'WeatherApp'>;
}

const WeatherApp: React.FunctionComponent<IWeatherAppPageProps> = ({
  navigation,
}) => {
  const tw = useTailwind();
  // this uses the url from the global state. Everytime it will be updated,
  // this component will re-render.
  const url = useStore(state => state.url);

  return (
    <View style={tw('h-full w-full bg-blue-300')}>
      <View style={tw('flex flex-row justify-end mr-4 mt-4')}>
        <Icon
          tvParallaxProperties=""
          name="cog"
          type="font-awesome"
          size={32}
          color="white"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <WebView
        source={{uri: url}}
        onError={event => Alert.alert(event.nativeEvent.description)}
      />
    </View>
  );
};

export default WeatherApp;
