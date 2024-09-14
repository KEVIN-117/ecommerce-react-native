import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../shared/theme';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductScreen } from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
    return (
    
        <Stack.Navigator 
            initialRouteName='HomeScreen'
            screenOptions={{
                headerTitleAlign: 'center',
                
                headerShadowVisible: false,
                navigationBarColor: COLORS.bg_body,
                headerShown: false,
                contentStyle: {
                    
                    backgroundColor: COLORS.bg_body,
                }
            }}
        >

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    )
}
