import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const getData = await fetch('https://fakestoreapi.com/products');

                if (!getData.ok) {
                    throw new Error('Network response was not ok!')
                }
                const res = await getData.json();
                setData(res);
            } catch (error) {
                console.log(error)
            } finally {
                setLoader(false)
            }
        }

        fetchData()
    }, [])


    return (
        <ProductContext.Provider value={{ data, loader }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;