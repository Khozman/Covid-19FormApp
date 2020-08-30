import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
import ToggleSwitch from 'rn-toggle-switch';
export const SymptomCard5 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
            <Text >Symptoms</Text>
            {/* Yes or No */}
            <Text >Sore throat</Text>

            <ToggleSwitch
                text={{on: 'YES', off: 'NO', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
                textStyle={{fontWeight: 'bold'}}
                color={{ indicator: 'white', active: '#18D5ff', inactive: 'rgba(247, 247, 247, 1)', activeBorder: '#18D5ff', inactiveBorder: '#E9E9E9'}}
                active={true}
                disabled={false}
                width={80}
                radius={25}
                onValueChange={(val) => {
                    /*Handler function*/ 
                }}
                />

            <Text >Cough</Text>
            
            <ToggleSwitch
                text={{on: 'YES', off: 'NO', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
                textStyle={{fontWeight: 'bold'}}
                color={{ indicator: 'white', active: '#18D5ff', inactive: 'rgba(247, 247, 247, 1)', activeBorder: '#18D5ff', inactiveBorder: '#E9E9E9'}}
                active={true}
                disabled={false}
                width={80}
                radius={25}
                onValueChange={(val) => {
                    /*Handler function*/ 
                }}
                />

            <Text >Loss of smell OR loss of taste</Text>

            <ToggleSwitch
                text={{on: 'YES', off: 'NO', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
                textStyle={{fontWeight: 'bold'}}
                color={{ indicator: 'white', active: '#18D5ff', inactive: 'rgba(247, 247, 247, 1)', activeBorder: '#18D5ff', inactiveBorder: '#E9E9E9'}}
                active={true}
                disabled={false}
                width={80}
                radius={25}
                onValueChange={(val) => {
                    /*Handler function*/ 
                }}
                />

            <Text >Body aches</Text>

            <ToggleSwitch
                text={{on: 'YES', off: 'NO', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
                textStyle={{fontWeight: 'bold'}}
                color={{ indicator: 'white', active: '#18D5ff', inactive: 'rgba(247, 247, 247, 1)', activeBorder: '#18D5ff', inactiveBorder: '#E9E9E9'}}
                active={true}
                disabled={false}
                width={80}
                radius={25}
                onValueChange={(val) => {
                    /*Handler function*/ 
                }}
                />

            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard6')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity> 
</CardView>);
}