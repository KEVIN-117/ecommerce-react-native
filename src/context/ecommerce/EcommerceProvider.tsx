import { useEffect, useState } from "react"
import { EcommerceContext } from "./EcommerceContext"
import ecommerce from "../../api/Ecommerce";
import { IProductData, IProductsResponse } from "../../interfaces/products-response";
import { ICategoryData, ICategoriesResponse } from "../../interfaces/categories-response";


export const EcommerceProvider = ({ children }) => {

    const [products, setProducts] = useState<IProductData[]>([]);
    const [categories, setCategories] = useState<ICategoryData[]>([]);

    const getFullData = async () => {
        const productsResponse = await ecommerce.get<IProductsResponse>('/products')
        const categoriesResponse = await ecommerce.get<ICategoriesResponse>('/categories')

        setProducts(productsResponse.data.data);
        setCategories(categoriesResponse.data.data);
    }

    useEffect(() => {
        getFullData();
    },[])

    return (
        <EcommerceContext.Provider
            value={{
                products,
                categories
            }}
        >
            { children }
        </EcommerceContext.Provider>
    )
}