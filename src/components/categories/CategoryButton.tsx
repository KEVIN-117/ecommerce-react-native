import { Image, Text, View } from 'react-native';
import { ICategoryData } from '../../interfaces/categories-response'
import { GLOBALS } from '../../shared/globals';

interface Props {
    category: ICategoryData;
}

export const CategoryButton = ({ category }: Props) => {
    return (
        <View style={{...GLOBALS.category_button }}>
            <Image
                style={{ width: 40, height: 40 }}
                source={{ uri:`https://store.innovacode.online${ category.image }` }}
            />
            <Text>{ category.name }</Text>
        </View>
    )
}
