import { Recipt } from "./recipe";
export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recipe: {};
};

export enum SomeActions {
  "SAVE_RECIPE" = "SAVE_RECIPE",
}

export interface XAction {
  action: SomeActions.SaveRecipe;
  payload: Pick<AppState, "SAVE_RECIPE">;
}

export type Actions = SaveRecipe;
