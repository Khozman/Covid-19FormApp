import React from 'react';
import CardView from 'react-native-cardview';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style';
export const Card4 = ({ navigation }: any) => {
   
return(<CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={{flex:1, margin:16}}>
        <TextInput placeholder="Where do you work?" style={styles.textInput}  />
        <TextInput placeholder="Who is your line manager" style={styles.textInput} />
        <TextInput placeholder="Do they know that you are here?" style={styles.textInput} />
        <TextInput placeholder="Have you been sent by the Occ Health" style={styles.textInput} />
        <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } }
             onPress={()=>navigation.navigate('Successful')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Submit</Text>
        </TouchableOpacity>
    </CardView>);
}