

export const setCategories = state => state.categories.categories
    .reduce((acc, categ) => {
        const { category, items } = categ;
        acc[category.toLowerCase()] = items;
        return acc;
    }, {});