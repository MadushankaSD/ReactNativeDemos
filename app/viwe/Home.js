import React from 'react';
import {View} from 'react-native';
import ImageView from "../component/ImageView";

const home = () => {

    return (
        <View>
             <ImageView
                title="The First Image"
                imageTarget={require('../../assets/mountain.jpg')}
                likes={8}
            />
            <ImageView
                title="The Second Image"
                imageTarget={require("../../assets/forest.jpg")}
                likes={10}
            />
            <ImageView
                title="The Third Image"
                imageTarget={require("../../assets/mountain.jpg")}
                likes={3}
            />
        </View>
    );
}

export default home;
