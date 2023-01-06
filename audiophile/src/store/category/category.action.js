import { createAction } from "../../utils/reducer/create-action.reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (user) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, user);