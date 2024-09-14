import { Text, View } from "react-native";


import { ISimpleProductData } from "../../interfaces/simple-product-response"
import { GLOBALS, TYPOGRAPHY } from "../../shared/globals";
import { COLORS } from '../../shared/theme';
import { BuyButton } from "./BuyButton";

interface Props {
    product: ISimpleProductData;
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <View style={ GLOBALS.container }>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 20 }}>
                <Text style={ TYPOGRAPHY.title }>{ product.name }</Text>
                <Text style={[ TYPOGRAPHY.title,{ color: COLORS.primary }]}>{ product.price }$</Text>
            </View>
            <Text style={ TYPOGRAPHY.sub_title }>Descripcion</Text>
            <Text style={{ lineHeight: 20 ,color: COLORS.text_soft  }}>{ product.description }</Text>
            <BuyButton/>
        </View>
    )
}
