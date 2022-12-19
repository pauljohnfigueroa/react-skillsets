import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../data/products.data";

const categoryMap = PRODUCTS.reduce((acc, categ) => {
    const { category, items } = categ;
    acc[category.toLowerCase()] = items;
    return acc;
}, {});

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap] = useState(categoryMap);

    // useEffect(() => {
    //     //setCategoriesMap(categoryMap);
    // }, []);

    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};