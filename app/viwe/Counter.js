import React,{useState} from 'react';
import {StyleSheet,View, Button, Text} from 'react-native';

const Count = () => {
const [number,setNumber] =useState(0);
    return (
        <View style={style.container}>
            <Button title="Increase Count" onPress={()=>{
                setNumber(number+1);
            }}/>
            <Button title="Decrease Count" onPress={()=>{
                setNumber(number-1);
            }}/>

            <Text style={style.text}>The Number Count</Text>
            <Text style={style.number}>{number}</Text>
        </View>

    );
}

const style=StyleSheet.create({
   container:{
       flex:0.5,
       justifyContent:"center",
       /*alignContent:"center",*/
       alignItems:"center",

   },
   number:{
       fontSize:50
   },
   text:{
     marginTop:5
   },
});
export default Count;
