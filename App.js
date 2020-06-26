import React from 'react';
import{createSwitchNavigator,createAppContainer} from 'react-navigation';
import loginPage from "./app/viwe/loginPage";
import welcome from "./app/viwe/welcomePage";
import ListScreen from "./app/viwe/ListScreen";
import buttonNavigator from "./app/viwe/buttonNavigator";
import home from "./app/viwe/Home";
import Count from "./app/viwe/Counter";
import colourChange from "./app/viwe/colourChange";
import ColourCreater from "./app/viwe/colourCreater";
import InputChange from "./app/viwe/InputChange";

const RootApp = createSwitchNavigator(
    {
        Home:welcome,
        Login:loginPage,
        List:ListScreen,
        Button:buttonNavigator,
        Imageview:home,
        Count:Count,
        Colour:colourChange,
        Create:ColourCreater,
        Input:InputChange
    },
    {
        initialRouteName: 'Button',
        defaultNavigationOptions: {
            title: 'My First App'
        }
    }
)
export default createAppContainer(RootApp);