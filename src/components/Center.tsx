import * as React from 'react';
import {View} from 'react-native';

interface CenterProps {};

export const Center: React.FunctionComponent<CenterProps> = ({children}) => {
    return (
        <View
            style={{flex: 1, justifyContent: "center", alignItems: "center"}}
        >
            {children}
        </View>
    )
}

