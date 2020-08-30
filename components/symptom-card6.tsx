import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
import ToggleSwitch from 'rn-toggle-switch';
export const SymptomCard6 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
            <Text >Chills</Text>

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

            <Text >Shortness of breath</Text>

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

            <Text >Redness of the eyes</Text>

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

            <Text >Nausea / vomiting / diarrhoea</Text>

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

            <Text >Fatigue / weakness</Text>

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

            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('SymptomCard7')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
</CardView>);
}