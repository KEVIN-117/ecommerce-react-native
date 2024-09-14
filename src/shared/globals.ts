import { StyleSheet } from "react-native";
import { COLORS } from "./theme";


const SHADOWS = StyleSheet.create({
    shadow_sm: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },

    shadow_md: {
        shadowColor: COLORS.primary,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
})


export const TYPOGRAPHY = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    sub_title: {
        fontSize: 18,
        fontWeight: '500',
    }
})

export const GLOBALS = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },


    // CATEGORIES
    categories_list: {
        marginBottom: 30
    },

    category_button: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: COLORS.primary,
        marginVertical: 10,
        marginLeft: 15,
        ...SHADOWS.shadow_md
    },

    // PRODUCTS
    products_list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
        rowGap: 20,
    },

    product_card: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '48%',
        backgroundColor: '#fff',
        ...SHADOWS.shadow_md
    },

    search_input: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 7,
        marginBottom: 30,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.025)',
        borderRadius: 10,
        backgroundColor: '#fff',
        ...SHADOWS.shadow_sm,
    },

    buy_button: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        paddingVertical: 10,
        ...SHADOWS.shadow_md,
        marginVertical: 10,
        marginBottom: 20,
        textAlign: 'center',
    }

})

