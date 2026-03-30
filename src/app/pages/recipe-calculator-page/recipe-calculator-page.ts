import { Recette } from '../../models/recette.model';
import { Component, Inject } from '@angular/core';
import { RecetteService } from '../../services/recette.service';





@Component({
  selector: 'app-recipe-calculator-page',
  imports: [],
  templateUrl: './recipe-calculator-page.html',
  styleUrls: ['./recipe-calculator-page.css'],
})
export class RecipeCalculatorPage {

  public recetteAffichee: Recette | null = null;

  constructor(@Inject(RecetteService) private recetteService: RecetteService) { }

  calculerRecette(recetteEnvoyee: Recette): void {

    this.recetteService.createRecette(recetteEnvoyee).subscribe({

      next: (recette: Recette) => {
        this.recetteAffichee = recette;
        alert("Recette calculée et enregistrée avec succès !");
      },

      error: (err: any) => {
        alert("Erreur lors du calcul. Vérifier vos données.");
        console.error(err);
      }

    });

  }

  reset(): void {
    this.recetteAffichee = null;
  }

}
