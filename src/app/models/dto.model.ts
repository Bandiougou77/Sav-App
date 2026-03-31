export interface LigneIngredientDTO {
  quantite: number;
  pourcentage: number;
  ingredientId: number;
}

export interface RecetteFormDTO {
  id?: number | null;
  titre: string;
  description: string;
  surgraissage: number;
  avecSoude: boolean;
  concentrationAlcalin: number;
  ligneIngredients: LigneIngredientDTO[];
}