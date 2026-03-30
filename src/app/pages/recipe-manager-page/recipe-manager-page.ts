import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { Recette } from '../../models/recette.model';
Chart.register(...registerables);

@Component({
  selector: 'app-recipe-manager-page',
  imports: [],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage {
ouvrirModale(arg0: any) {
throw new Error('Method not implemented.');
}
  recetteService: any;
  recettes: any;
recetteSelectionnee: any;
  chargerRecettes(): void {
    this.recetteService.getRecettes().subscribe((data: any) => {
      this.recettes = data;
      // On attend un court instant que le DOM se mette à jour avec le @for
      setTimeout(() => {
        this.recettes.forEach((r: Recette) => this.initChart(r));
      }, 100);
    });
  }
  supprimerRecette(id: number): void {
    if (confirm("Supprimer cette recette ?")) {
      this.recetteService.deletteRecette(id).subscribe(() =>
        this.chargerRecettes());
    }
  } initChart(recette: Recette): void {
    const ctx = document.getElementById(`chart-${recette.id}`) as
      HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: recette.resultats.map(res => res.caracteristique.nom),
        datasets: [{
          label: 'Scores',
          data: recette.resultats.map(res => res.score),
          fill: true,
          backgroundColor: 'rgba(210, 0, 255, 0.2)',
          borderColor: 'rgb(210, 0, 255)',
          pointBackgroundColor: 'rgb(0, 180, 0)',
          pointBorderColor: 'rgb(0, 180, 0)',
          pointHoverBackgroundColor: 'rgb(255, 255, 255)',
          pointHoverBorderColor: 'rgb(0, 180, 0)'
        }]
      },

      options: {
        elements: { line: { borderWidth: 2 } },
        scales: {
          r: {
            suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }
fermerModale(){
  
}

}

