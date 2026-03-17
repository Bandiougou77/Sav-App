import { Injectable } from "@angular/core";
import { Recette } from "../models/recette.model";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private readonly API_URL_RECETTE = 'http://localhost:8080/api-savon/v1/recette';

  constructor(private http: HttpClient) {}

  /** POST : créer / calculer une recette */
  createRecette(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.API_URL_RECETTE, recette);
  }

  /** GET : récupérer toutes les recettes */
  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.API_URL_RECETTE);
  }

  /** GET : récupérer une recette par id */
  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.API_URL_RECETTE}/${id}`);
  }

}