import React, { useState } from "react";
import { datasource } from "./Data.js";
import { TextInput, Text, View, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {

    const [letter, setLetter] = useState("");
    const [type, setType] = useState("Vowels");

    return (
        <View>
            {/* Input */}
            <View>
                <Text>Letter:</Text>
                <TextInput style={{ borderWidth: 1 }} maxLength={1} onChangeText={(text) => setLetter(text)}/>
            </View>

            {/* Picker */}
            <RNPickerSelect onValueChange={(value) => setType(value)}
                items={[
                    {label: 'Vowels',value: 'Vowels'},
                    {label: 'Consonants',value: 'Consonants'},
                ]}
                value={(type)}
            />

            {/* Button */}
            <Button title="Submit" onPress={() => {
                let item = {key : letter};
                let indexnum = 1;
                if (type=="Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }}
            />

        </View>
    );
};

export default Add;