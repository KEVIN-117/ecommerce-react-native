import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigators/MainNavigator';
import { EcommerceProvider } from './src/context/ecommerce/EcommerceProvider';

export default function App() {
  return (
    <NavigationContainer>
      <EcommerceProvider>
        <MainNavigator />
      </EcommerceProvider>
    </NavigationContainer>
  );
}