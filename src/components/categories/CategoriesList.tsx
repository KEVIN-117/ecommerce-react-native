import { FlatList, Text } from 'react-native';
import { useEcommerce } from '../../hooks/useEcommerce'
import { GLOBALS, TYPOGRAPHY } from '../../shared/globals';
import { CategoryButton } from './CategoryButton';

export const CategoriesList = () => {

    const { categories } = useEcommerce();

    return (
        <>
            <Text style={{...TYPOGRAPHY.title, ...GLOBALS.container }}>Categorias</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryButton category={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={GLOBALS.categories_list}
            />
        </>
    )
}
