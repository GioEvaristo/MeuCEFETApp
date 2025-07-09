import { NavigationContainer } from '@react-navigation/native'

import StackRoutes from './stack.routes'
import BottomTabsRoutes from './bottom-tabs.routes'

//container de contextos
export function Routes() {
    return (
        <NavigationContainer>
            
            <BottomTabsRoutes />

        </NavigationContainer>
    )
}