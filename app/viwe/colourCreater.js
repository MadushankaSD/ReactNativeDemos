import React,{useReducer} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ColorTemplate from "../component/colorTemplate";

const reducer= (state,action)=>{
    switch (action.type) {
        case 'red':
           return  state.red+action.payload>255||state.red+action.payload<0? state : {...state ,red:state.red+action.payload}
        case 'green':
            return state.green+action.payload>255||state.green+action.payload<0? state : {...state ,green:state.green+action.payload}
        case 'blue':
            return state.blue+action.payload>255||state.blue+action.payload<0? state : {...state ,blue:state.blue+action.payload}
        default:
            return state;
    }
}

const ColourCreater =()=> {

    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})

    const increase = 10;

    return (
        <View style={style.textStyle}>
            <Text >Create Color</Text>
            <ColorTemplate colour="Red"
                           onIncrease={()=>dispatch({type:'red',payload:increase})}
                           onDecrease={()=>dispatch({type:'red',payload:-1*increase})}
                            />
            <ColorTemplate colour="Green"
                           onIncrease={()=>dispatch({type:'green',payload:increase})}
                           onDecrease={()=>dispatch({type:'green',payload:-1*increase})}
            />
            <ColorTemplate colour="Blue"
                           onIncrease={()=>dispatch({type:'blue',payload:increase})}
                           onDecrease={()=>dispatch({type:'blue',payload:-1*increase})}
            />

            <View style={{width: 100,height:100,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
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