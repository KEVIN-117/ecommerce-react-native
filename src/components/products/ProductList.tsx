import React from 'react'
import { View, Text } from 'react-native';
import { useEcommerce } from '../../hooks/useEcommerce';
import { GLOBALS, TYPOGRAPHY } from '../../shared/globals';
import { ProductCard } from './ProductCard';

export const ProductList = () => {

    const { products } = useEcommerce();

    return (
        <View style={GLOBALS.container}>
            <Text style={ TYPOGRAPHY.title }>Todos los productos</Text>
            <View style={ GLOBALS.products_list }>
                {
                    products.map(product => (
                        <ProductCard key={ product.id }  product={ product }/>
                    ))
                }
            </View>
        </View>
    )
}
