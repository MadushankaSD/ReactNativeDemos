import React from 'react';
import { View,StyleSheet, Text,SafeAreaView,Button ,FlatList } from 'react-native';

const colourChange = () => {
    return (
        <SafeAreaView>
            <Button title="Reload Colour" onPress={()=>{
                console.log("Done");
            }}/>
            <FlatList data={} >

            </FlatList>
            <View style={{width:100,height:100,backgroundColor:createRandomColour()}}>

            </View>
        </SafeAreaView>
    );
}

const createRandomColour = ()=>{
const red = Math.random()*256
const green = Math.random()*256
const blue = Math.random()*256

    return `rgb(${red},${green},${blue})`;

}
const styles = StyleSheet.create({
    
});

export default colourChange;