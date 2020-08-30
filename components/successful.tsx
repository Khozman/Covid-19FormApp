import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export const Successful = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                backgroundColor: '#18D5ff', alignItems: 'center', justifyContent: 'center',
                borderRadius: 12, paddingHorizontal: 60, padding: 40
            }}>
                <Icon name="checkcircle" size={120} style={{ color: '#fff' }} />
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', margin: 2 }}>
                    {`Thank you! `}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', margin: 0 }}>
                    {`Your form has been submitted. `}
                </Text>

            </View>

        </View>
    )
}