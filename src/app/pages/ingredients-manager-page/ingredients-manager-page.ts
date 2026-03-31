import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients-manager-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingredients-manager-page.html',
  styleUrl: './ingredients-manager-page.css',
})
export class IngredientsManagerPage implements OnInit {
  public ingredients: Ingredient[] = [];
  public ingredientSelectionne: Ingredient | null = null;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().subscribe({
      next: (data) => this.ingredients = data,
      error: (err) => console.error("Erreur API : ", err)
    });
  }

  creerNouvelIngredient(): void {
    this.ingredientSelectionne = {
      id: 0, nom: '', sapo: 0, ins: 0, iode: 0,
      volMousse: 0, tenueMousse: 0, douceur: 0,
      lavant: 0, durete: 0, solubilite: 0, sechage: 0,
      estCorpsGras: true
    };
  }

  editerIngredient(item: Ingredient): void {
    this.ingredientSelectionne = { ...item };
  }

  saveIngredient(): void {
    if (!this.ingredientSelectionne) return;
    const action = this.ingredientSelectionne.id === 0
      ? this.ingredientService.addIngredient(this.ingredientSelectionne)
      : this.ingredientService.updateIngredient(this.ingredientSelectionne);
    action.subscribe({
      next: () => {
        this.ingredientSelectionne = null;
        this.getIngredients();
      }
    });
  }

  deleteIngredient(id: number): void {
    if (confirm("Supprimer cet ingrédient ?")) {
      this.ingredientService.deleteIngredient(id).subscribe(() =>
        this.getIngredients()
      );
    }
  }
}