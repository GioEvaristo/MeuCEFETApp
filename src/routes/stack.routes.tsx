import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator();

import Home from '../screens/Home';
import Horarios from '../screens/Horarios';
import Ajuda from '../screens/Ajuda';

export default function StackRoutes(){ 
    return(
        <Navigator>
            <Screen 
                name='pag-home'
                component={Home}
                options={{
                    title: 'Página Inicial',
                    headerTintColor: 'red'
                }}
            />
            <Screen 
                name='pag-horarios'
                component={Horarios}
            />

            <Screen 
                name='pag-ajuda'
                component={Ajuda}
            />
        </Navigator>
    )
}
