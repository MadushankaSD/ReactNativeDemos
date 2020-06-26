import React from 'react';
import {Text, View,Button} from "react-native";


const ColorTemplate=({colour , onIncrease , onDecrease})=>{

    return (
        <View>
            <Text>{colour}</Text>
            <Button title={`Increase ${colour}`}  onPress={()=>{onIncrease()}} />
            <Button title={`Decrease ${colour}` }  onPress={()=>{onDecrease()}} />
        </View>
    );
}

export default ColorTemplate;