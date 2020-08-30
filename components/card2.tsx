import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from '../style';
export const Card2 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
    <TextInput placeholder="Home Address" style={styles.textInput}  />
    <TextInput placeholder="Postal Code" style={styles.textInput} />
    <TextInput placeholder="Cellphone Number" style={styles.textInput} />
    <View style={{ borderColor: '#e3e3e3', borderWidth: 1, marginVertical:8 }}></View>

    <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } } onPress={()=>navigation.navigate('Card3')}>
    <Text style={{color:'#fff',textAlign:'center'}}>Next</Text>
</TouchableOpacity>
</CardView>);
}