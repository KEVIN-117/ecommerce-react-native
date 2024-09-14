import { useEffect, useState } from 'react';

import ecommerce from '../api/Ecommerce';

export const useFetch = <T>( url: string ) => {

    const [data, setData] = useState<T | null>({} as T)
    const [isLoading, setIsLoading] = useState(false)

    const fetchingData = async () => {
        
        setIsLoading(true);
        
        try {
            
            const axiosData = await ecommerce.get(url);
            setData(axiosData.data.data as T);

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])
    

    
    return {
        data,
        isLoading,
    }
}
