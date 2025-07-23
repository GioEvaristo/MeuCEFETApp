import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Ajuda from '../screens/Ajuda'
import Home from '../screens/Home'
import Horarios from '../screens/Horarios';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

export default function BottomTabsRoutes(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='pag-home'>
                <Tab.Screen
                name="pag-login"
                component={Login}
                options={{title: 'Login', tabBarShowLabel: false, headerTintColor: 'white', headerStyle: {backgroundColor: '#000435'}, tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color='#ff8c00'/>), tabBarStyle: { backgroundColor: '#000435' }}}
                ></Tab.Screen>
                <Tab.Screen
                name="pag-home"
                component={Home}
                options={{title: 'Início', tabBarShowLabel: false, headerTintColor: 'white', headerStyle: {backgroundColor: '#000435'}, tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color='#ff8c00'/>), tabBarStyle: { backgroundColor: '#000435' }}}
                ></Tab.Screen>

                <Tab.Screen
                name="pag-horarios"
                component={Horarios}
                options={{title: 'Horários', tabBarShowLabel: false, headerTintColor: 'white', headerStyle: {backgroundColor: '#000435'}, tabBarIcon: ({ color, size }) => (<Ionicons name='calendar' size={size} color='#ff8c00'/>), tabBarStyle: { backgroundColor: '#000435' }}}
                ></Tab.Screen>

                <Tab.Screen
                name="pag-ajuda"
                component={Ajuda}
                options={{title: 'Ajuda', tabBarShowLabel: false, headerTintColor: 'white', headerStyle: {backgroundColor: '#000435'}, tabBarIcon: ({ color, size }) => (<Ionicons name='help-circle' size={size} color='#ff8c00'/>), tabBarStyle: { backgroundColor: '#000435' }}}
                ></Tab.Screen>

            </Tab.Navigator>    
        </NavigationContainer>
    )
}
