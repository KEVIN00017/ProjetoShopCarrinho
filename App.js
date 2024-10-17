import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./pages/index.js";
import Cart from "./pages/Cart.js";
import AppProvider from "./contexts/context.js";

const Stack=createStackNavigator();
function App(){
    return(
        <NavigationContainer>
            <AppProvider>
           <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Index}/>
                <Stack.Screen name="Cart" component={Cart}/>
           </Stack.Navigator>
           </AppProvider>
        </NavigationContainer>
    )
}
export default App