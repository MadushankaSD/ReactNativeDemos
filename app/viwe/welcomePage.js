import React from 'react';
import { StyleSheet, Text,SafeAreaView  } from 'react-native';

const welcome = ()=>{
    const name = "madushanka";

    return (
        <SafeAreaView>
            <Text style={styles.text1}>Welcome To my first App</Text>
            <Text style={styles.text2}>This is new {name}</Text>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    text1: {
        fontSize:40
    },
    text2:{
        fontSize: 20
    }
});

export default welcome;
