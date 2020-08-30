import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const SymptomCard7 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
            {/* Home or Work */}
            <Text >At Home or work?</Text>
             <TextInput placeholder="Clinical and Progress Note and Exposure History:" style={styles.textInput} />
 
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } }
                onPress={()=>navigation.navigate('Successful')}>
            <Text style={{color:'#fff',textAlign:'center'}}>Submit</Text>
        </TouchableOpacity>
 </CardView>);
 }