import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const listScreen = ()=>{
    const mylist = [
        {name: 'madushanka#1',age: '12'},
        {name: 'madushanka#2',age: '13'},
        {name: 'madushanka#3',age: '14'},
        {name: 'madushanka#4',age: '15'},
        {name: 'madushanka#5',age: '16'},
        {name: 'madushanka#6',age: '17'},
        {name: 'madushanka#7',age: '18'},
        {name: 'madushanka#8',age: '19'},
        {name: 'madushanka#9',age: '20'}
    ];

    return (
        <FlatList
            /*horizontal
            showHorizontalScrollIndicator={false}*/
            data={mylist}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}> name : {item.name}- age: {item.age}</Text>;
            }
            }
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop:10
    }
});
export default listScreen;