import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {Button} from "react-native-web";

const buttonNavigator=(props)=>{
    console.log(props.navigation);
    return (
        <View>
            <Button
                style={styles.button}
                title={"loginPage"}
                onPress={() =>props.navigation.navigate('Login') }
            />
            <Button
                style={styles.button}
                title={"Welcome Page"}
                onPress={() =>props.navigation.navigate('Home') }
            />
            <TouchableOpacity
                onPress={() =>props.navigation.navigate('List') }
            >
               <Text>Click For List View</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        flex:1,
        margin:5
    }
});

export default buttonNavigator;
