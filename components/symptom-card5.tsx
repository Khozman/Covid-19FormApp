import React, { useState } from 'react';
import CardView from 'react-native-cardview';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import ToggleSwitch2 from 'toggle-switch-react-native'
export const SymptomCard5 = ({ navigation }: any) => {
    const [hasSoreThroat, setHasSoreThroat] = useState<boolean>(false);
    const [hasCough, setHasCough] = useState(false);
    const [hasLossOfSmellOrLossOfTaste, setLossOfSmellOrLossOfTaste] = useState(false);
    const [hasBodyAches, setHasBodyAches] = useState(false);

    return (<CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{ margin: 16, padding: 16 }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }} >Symptoms</Text>

        <View style={styles.row} >
            <ToggleSwitch2
                isOn={hasSoreThroat}
                onColor="green"
                offColor="red"
                label="Sore throat"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasSoreThroat(isOn)}
            />
        </View>

        <View style={styles.row} >
            <ToggleSwitch2
                isOn={hasCough}
                onColor="green"
                offColor="red"
                label="Cough"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasCough(isOn)}
            />
        </View>

        <View style={styles.row} >
            <ToggleSwitch2
                isOn={hasLossOfSmellOrLossOfTaste}
                onColor="green"
                offColor="red"
                label="Loss of smell/Loss of taste"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setLossOfSmellOrLossOfTaste(isOn)}
            />
        </View>

        <View style={styles.row} >
            <ToggleSwitch2
                isOn={hasBodyAches}
                onColor="green"
                offColor="red"
                label="Body aches"
                labelStyle={{ color: "black", fontWeight: "900", fontSize: 18, marginVertical: 8, flex: 1 }}
                size='large'
                onToggle={isOn => setHasBodyAches(isOn)}
            />
        </View>


        <TouchableOpacity style={{ padding: 16, backgroundColor: '#18D5ff', margin: 8, borderRadius: 12 }} onPress={() => navigation.navigate('SymptomCard6')}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
    </CardView>);
}
const styles = StyleSheet.create({
    row: { marginVertical: 8 }
})