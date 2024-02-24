// context/ProductContext.js
import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function useProduct() {
    return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({});

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
