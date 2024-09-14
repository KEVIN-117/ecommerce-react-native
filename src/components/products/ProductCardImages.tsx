import React, { useEffect, useState } from 'react'
import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import { ISimpleProductData } from '../../interfaces/simple-product-response';
import { FlatList } from 'react-native';
import { GLOBALS } from '../../shared/globals';


interface Props {
    product: ISimpleProductData;
}

export const ProductCardImages = ({ product }: Props) => {
    

    const [urlImage, setUrlImage] = useState('')

    useEffect(() => {
        if( product.images ){
            setUrlImage(product.images[0].url);
            return;
        }
        setUrlImage('');
    }, [product])
    

    return (
        <View style={GLOBALS.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 300, height: 300, marginBottom: 10 }}
                    source={{ uri: `https://store.innovacode.online${urlImage}` }}
                />
            </View>
            <FlatList
                data={product.images}
                horizontal
                ItemSeparatorComponent={() => <View style={{ marginHorizontal: 10 }}></View>}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setUrlImage(item.url)}>
                        <Image
                            style={{ width: 80, height: 80 }}
                            source={{ uri: `https://store.innovacode.online${item.url}` }}
                        />
                    </TouchableOpacity>
                )}
                style={{ marginBottom: 40 }}
            />
        </View>
    )
}
