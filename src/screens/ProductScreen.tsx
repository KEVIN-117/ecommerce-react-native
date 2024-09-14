import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { useFetch } from '../hooks/useFetch';
import { TYPOGRAPHY } from '../shared/globals';
import { ProductCardImages, ProductDetails } from '../components';
import { ISimpleProductData } from '../interfaces/simple-product-response';

export const ProductScreen = () => {

    const { params: { slug } }: any = useRoute();
    const { data, isLoading } = useFetch<ISimpleProductData>(`https://store.innovacode.online/api/products/${slug}`);


    if( isLoading ){
        return (
            <View>
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <StatusBar style="light" />
                <SafeAreaView style={{ paddingTop: 30 }}>
                    <Text style={{...TYPOGRAPHY.sub_title, textAlign:'center', marginBottom: 40 }}>{ data.name }</Text>
                    <ProductCardImages product={ data } />
                    <ProductDetails product={ data }/>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}
