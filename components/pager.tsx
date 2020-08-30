import React, { useState } from 'react';

import { View, Animated, Text, Dimensions } from 'react-native';
import { Successful } from './successful';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SymptomCard1 } from './symptom-card1';

export const Pager = () => {
    const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]

    const screen = Dimensions.get("screen");

    const moveBall = () => {
        Animated.timing(value, {
            toValue: { x: randomPosition(0, screen.width), y: randomPosition(0, screen.height) }, duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const randomPosition = (min = 0, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return <View style={{ flex: 1 ,justifyContent:'flex-end'}}>
        <TouchableOpacity onPress={moveBall} style={{ padding: 10, borderColor: '#333', borderWidth: 0.6, borderRadius: 8, margin: 16 }}>
            <Text>Move ball</Text>
        </TouchableOpacity>

        <Animated.View style={value.getLayout()}>
            <View style={{
                width: 100, height: 100,
                borderRadius: 100 / 2, backgroundColor: '#333'
            }}>

            </View>
        </Animated.View>
    </View>
}