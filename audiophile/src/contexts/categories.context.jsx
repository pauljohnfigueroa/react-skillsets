import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import PRODUCTS from "../data/products.data";

export const CategoriesContext = createContext({
    categoriesMap: {} // works even if I remove this, why??
});

export const CategoriesProvider = ({ children }) => {

    useEffect(() => {
        addCollectionAndDocuments('categories', PRODUCTS);
    }, []);

    const categoryMap = PRODUCTS.reduce((acc, categ) => {
        const { category, items } = categ;
        acc[category.toLowerCase()] = items;
        return acc;
    }, {});

    const [categoriesMap] = useState(categoryMap);

    console.log(categoriesMap);
    // useEffect(() => {
    //     //setCategoriesMap(categoryMap);
    // }, []);
    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};