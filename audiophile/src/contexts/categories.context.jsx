import { createContext, useEffect, useState } from "react";
import { getCollectionsAndDocuments } from "../utils/firebase/firebase.utils";

import PRODUCTS from "../data/products.data";

export const CategoriesContext = createContext({
    categoriesMap: {} // works even if I remove this, why??
});

export const CategoriesProvider = ({ children }) => {

    // Use to upload data to firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', PRODUCTS);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionsAndDocuments();
            console.log(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const categoryMap = PRODUCTS.reduce((acc, categ) => {
        const { category, items } = categ;
        acc[category.toLowerCase()] = items;
        return acc;
    }, {});

    const [categoriesMap] = useState(categoryMap);

    //console.log(categoriesMap);
    // useEffect(() => {
    //     //setCategoriesMap(categoryMap);
    // }, []);
    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};