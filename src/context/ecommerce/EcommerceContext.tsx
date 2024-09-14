import { createContext } from "react";
import { IProductData } from "../../interfaces/products-response";
import { ICategoryData } from "../../interfaces/categories-response";


interface ContextProps {
    products: IProductData[];
    categories: ICategoryData[]
}

export const EcommerceContext = createContext({} as ContextProps);