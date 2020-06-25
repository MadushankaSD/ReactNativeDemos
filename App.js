import React from 'react';
import{createSwitchNavigator,createAppContainer} from 'react-navigation';
import loginPage from "./app/viwe/loginPage";
import welcome from "./app/viwe/welcomePage";
import ListScreen from "./app/viwe/ListScreen";
import buttonNavigator from "./app/viwe/buttonNavigator";

const RootApp = createSwitchNavigator(
    {
        Home:welcome,
        Login:loginPage,
        List:ListScreen,
        Button:buttonNavigator
    },
    {
        initialRouteName: 'Button',
        defaultNavigationOptions: {
            title: 'My First App'
        }
    }
)
export default createAppContainer(RootApp);