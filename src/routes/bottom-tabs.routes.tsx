import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Ajuda from '../screens/Ajuda'
import Home from '../screens/Home'
import Horarios from '../screens/Horarios';

const Tab = createBottomTabNavigator();

export default function BottomTabsRoutes(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Início'>
                <Tab.Screen
                name="Início"
                component={Home}
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color='#ff8c00'/>),}}
                ></Tab.Screen>

                <Tab.Screen
                name="Horários"
                component={Horarios}
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name='time' size={size} color='#ff8c00'/>),}}
                ></Tab.Screen>

                <Tab.Screen
                name="Ajuda"
                component={Ajuda}
                options={{tabBarIcon: ({ color, size }) => (<Ionicons name='help-circle' size={size} color='#ff8c00'/>),}}
                ></Tab.Screen>

            </Tab.Navigator>    
        </NavigationContainer>
    )
}
