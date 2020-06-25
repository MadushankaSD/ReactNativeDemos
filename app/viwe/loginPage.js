import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from "react-native-web";

const loginPage=()=> {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Madushanka!</Text>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {

    },
});

export default loginPage;