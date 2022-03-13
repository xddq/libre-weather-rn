import React from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NativeSyntheticEvent, NativeTouchEvent, View} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import {useTailwind} from "tailwind-rn/dist";
import {RootStackParamList} from "../../App";

import useStore from "../components/GlobalState";

interface ISettingsPageProps {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
}
const SettingsPage: React.FunctionComponent<ISettingsPageProps> = ({navigation}) => {

    const tw = useTailwind();
    const [text, setText] = React.useState("");

    // this uses the url from the global state. Everytime it will be updated,
    // this component will re-render.
    const officialUrl = useStore((state) => state.officialUrl);
    const url = useStore((state) => state.url);
    const setUrl = useStore((state) => state.setUrl);
    const resetUrl = useStore((state) => state.clearState);

    const useGivenInstance = (_: NativeSyntheticEvent<NativeTouchEvent>): void => {
        text === "" ? setUrl(officialUrl) : setUrl(text)
        navigation.navigate('WeatherApp')
    }

    const resetInstance = (_: NativeSyntheticEvent<NativeTouchEvent>): void => {
        resetUrl()
        navigation.navigate('WeatherApp')
    }

    return (
        <View style={tw('h-full flex flex-col p-8 py-24 bg-blue-300')}>
            <View style={tw('flex flex-col justify-center items-center h-full p-4 bg-blue-400 rounded-xl')}>
                <Text style={tw('font-medium text-3xl text-white')}>Instance settings</Text>
                <Text style={tw('mt-4 text-white mx-4 text-center text-base')}>
                    If you want to use a self hosted libre-weather instance just
                    insert the url to the server of your choice below.</Text>
                <Input
                    onChangeText={(currentState) => setText(currentState)}
                    labelStyle={tw('text-white mt-4')}
                    placeholderTextColor={'white'}
                    placeholder={'https://www...'}
                    label={'URL'}
                    value={text}
                />
                <View style={tw('flex flex-row justify-center items-center h-16 mt-4')}>
                    <Button
                        title="Use given instance."
                        containerStyle={tw('bg-blue-500 w-32 h-14 mr-4 rounded-xl')}
                        onPressIn={useGivenInstance}
                    />
                    <Button
                        title="Reset to default instance."
                        containerStyle={tw('bg-blue-500 w-32 h-14 rounded-xl')}
                        onPressOut={resetInstance}
                    />
                </View>
                <Text style={tw('text-white mx-4 text-center font-medium text-xl mt-6')}>Current url is:</Text>
                <Text style={tw('text-white mx-4 text-center text-base underline')}>{url}</Text>
            </View>
        </View>
    );
}

export default SettingsPage;
