import { Ingredient } from "./Ingredient";

export interface Recipe {
  title: string;
  description: string;
  ingredients: Ingredient[];
  id: number;
}


