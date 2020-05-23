import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export const Home = ({ navigation }: any) => {
   
    return( <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <View>
        <TouchableOpacity  onPress={() => navigation.navigate('SpecimenForm')} style={styles.button}>
            <Text style={styles.text}>COVID-19 specimen form </Text>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity onPress={() => navigation.navigate('SymptomForm')} style={styles.button}>
            <Text style={styles.text}>Symptom Monitoring Form </Text>
        </TouchableOpacity>
    </View>

</View>
    );
}

const styles= StyleSheet.create({
    button:{ paddingVertical: 26, padding: 16, backgroundColor: '#18D5ff', margin:16, borderRadius:12 }
    ,text:{color:'#fff'}
})


