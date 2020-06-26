import React,{useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Button, FlatList} from 'react-native';
import ColorTemplate from "../component/colorTemplate";


const ColourCreater =()=> {

    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);

    const setColour=(colour,increment)=>{
        switch (colour) {
            case 'red':
                red + increment > 255 || red + increment < 0 ? null : setRed(red+increment);
                break;
            case 'green':
                green + increment > 255 || green + increment < 0 ? null : setGreen(green+increment);
                break;
            case 'blue':
                blue + increment > 255 || blue + increment < 0 ? null : setBlue(blue+increment);
                break;
            default:
                break;
        }
    }

    const increase = 10;

    return (
        <View style={style.textStyle}>
            <Text >Create Color</Text>
            <ColorTemplate colour="Red"
                           onIncrease={()=>setColour('red',increase)}
                           onDecrease={()=>setColour('red',-1*increase)}
                            />
            <ColorTemplate colour="Green"
                           onIncrease={()=>setColour('green',increase)}
                           onDecrease={()=>setColour('green',-increase)}
            />
            <ColorTemplate colour="Blue"
                           onIncrease={()=>setColour('blue',increase)}
                           onDecrease={()=>setColour('blue',-increase)}
            />

            <View style={{width: 100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
}

const style=StyleSheet.create({
    textStyle:{
        alignItems:"center",
        justifyContent:"center"
    }
});

export default ColourCreater;