import React, {useReducer} from 'react';
import {Text, SafeAreaView, TextInput, Button, StyleSheet} from 'react-native';


const reducer = (state, action) => {
    //state={username:String,password:String}
    //action=type:username || password
    switch (action.type) {
        case "username":
            return {...state, username: action.payload};
        case "password":
            return {...state, password: action.payload};
        default:
            return state;
    }
}

const loginPage = () => {
    const [state, dispatch] = useReducer(reducer, {username: 'exampl@gmail.com', password: ''})

    return (
        <SafeAreaView>
            <Text style={styles.textStyle}>Login</Text>
            <TextInput style={styles.inputStyle}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                       value={state.username}
                       onChangeText={(user) => dispatch({type:'username',payload: user})}
            />
            {state.username.length<5?<Text style={styles.styleAlert} > enter Valid Email </Text>:null}

            <TextInput style={styles.inputStyle}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                       value={state.password}
                       onChangeText={(pwd) => dispatch({type:'password',payload: pwd})}
            />
            {state.password.length<5?<Text style={styles.styleAlert} > Password Wrong Please Try Again </Text>:null}

            <Button title={"Log In"} inPress={() => {

            }}/>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 50
    },
    inputStyle: {
        margin:10,
        borderColor:'blue',
        borderWidth:2,
        borderRadius:20
    },
    styleAlert:{
        fontSize: 15
    }
});

export default loginPage;