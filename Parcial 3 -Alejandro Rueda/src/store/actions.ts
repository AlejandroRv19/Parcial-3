import { Recipe } from "../types/recipe";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveProduct = async (recipe: Recipe): Promise <Actions> => {
   await firebase.SaveRecipe(recipe);
    return {
        action: SomeActions.SAVE_RECIPE,
        payload:recipe,
 };