import React,{useState} from 'react';
import {StyleSheet,View, Button, Text,TextInput} from 'react-native';


const InputChange =( )=> {
    const [name,setName]=useState('');
        return (
            <View>
                <Text>Enter Your Name</Text>
                <TextInput
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    style={style.inputStyle}
                    value={name}
                    onChangeText={(newText)=>setName(newText)}
                />
                <Text>Your name is: {name}</Text>
            </View>
        );
    }

const style=StyleSheet.create({
    inputStyle:{
        margin:10,
        borderColor:'black',
        borderWidth:2
    }
});


export default InputChange;