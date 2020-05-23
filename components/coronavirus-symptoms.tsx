import React from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../style';
export const CoronavirusSymptoms = ({navigation}:any) => {
    return (
        <ScrollView>
            <Text style={{ margin: 8 }}>Coronavirus symptoms for staff in healthcare setting</Text>
            <TextInput placeholder="Days post exposure" style={styles.textInput} />
            <TextInput placeholder="Date: DD'/MM" style={styles.textInput} />
            <Text >Document morning + evening </Text>
            {/* AM / PM */}
            <Text >1. Temperature (no meds) </Text>
            <Text >2. Respitoryrate </Text>
            <Text >3. Pulse rate </Text>

            <Text >Symptoms</Text>
            {/* Yes or No */}
            <Text >Sore throat</Text>
            <Text >Cough</Text>
            <Text >Loss of smell OR loss of taste</Text>
            <Text >Body aches</Text>
            <Text >Chills</Text>
            <Text >Shortness of breath</Text>
            <Text >Redness of the eyes</Text>
            <Text >Nausea / vomiting / diarrhoea</Text>
            <Text >Fatigue / weakness</Text>
            {/* Home or Work */}
            <Text >At Home or work?</Text>
            <TextInput placeholder="Clinical and Progress Note and Exposure History:" style={styles.textInput} />
            
            <TouchableOpacity style={{  padding: 16, backgroundColor: '#18D5ff', margin:8, borderRadius:12 } }
             onPress={()=>navigation.navigate('Successful')}>
                <Text style={{color:'#fff',textAlign:'center'}}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}