import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Button, FlatList} from 'react-native';

const colourChange = () => {
    const [colour, setColour] = useState([]);
    return (
        <SafeAreaView>
            <Button title="Reload Colour" onPress={() => {
                setColour([...colour, createRandomColour()]);
            }}
            />
            <FlatList
             keyExtractor={(item)=>item}
            data={colour}
            renderItem={({item})=>{
               return <View style={{width: 100, height: 100, backgroundColor: item}}/>
            }}
            />


        </SafeAreaView>
    );
}

const createRandomColour = () => {
    const red = Math.random() * 256
    const green = Math.random() * 256
    const blue = Math.random() * 256

    return `rgb(${red},${green},${blue})`;

}
export default colourChange;