
import { TouchableOpacity, Text } from 'react-native';
import { GLOBALS } from '../../shared/globals';

export const BuyButton = () => {
    return (
        <TouchableOpacity activeOpacity={ 0.8 } style={ GLOBALS.buy_button }>
            <Text style={{ color: 'white', fontWeight: '700', textAlign: 'center' }}>
                Comprar producto
            </Text>
        </TouchableOpacity>
    )
}
