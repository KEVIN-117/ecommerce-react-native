import { TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { GLOBALS } from '../../shared/globals';

export const SearchInput = () => {
    return (
        <View style={GLOBALS.container}>
            <View style={GLOBALS.search_input}>
                <TextInput
                    style={{ width: '80%' }}
                    placeholder='Busca un producto'
                    placeholderTextColor={'rgba(0, 0, 0,0.3)'}
                />
                <Icon name="magnifier" size={14} color={'rgba(0, 0, 0,0.5)'} />
            </View>
        </View>
    )
}
