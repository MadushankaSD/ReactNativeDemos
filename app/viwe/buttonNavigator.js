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

            <Button
                style={styles.button}
                title={"Image Page"}
                onPress={() =>props.navigation.navigate('Imageview') }
            />
            <Button
                style={styles.button}
                title={"Count App Page"}
                onPress={() =>props.navigation.navigate('Count') }
            />
            <Button
                style={styles.button}
                title={"Colour Block Generate"}
                onPress={() =>props.navigation.navigate('Colour') }
            />
            <Button
                style={styles.button}
                title={"Colour Creater"}
                onPress={() =>props.navigation.navigate('Create') }
            />
            <Button
                style={styles.button}
                title={"Input Change"}
                onPress={() =>props.navigation.navigate('Input') }
            />
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
