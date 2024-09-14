import { useContext } from 'react'
import { EcommerceContext } from '../context/ecommerce/EcommerceContext'

export const useEcommerce = () => {
    return useContext(EcommerceContext);
}
