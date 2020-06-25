import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

const ImageView=({title,imageTarget,likes})=>{
    console.log(imageTarget);
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageTarget}/>
            <Text>likes: {likes}</Text>
        </View>
    );
}

export default ImageView;