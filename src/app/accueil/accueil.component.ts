import { Component, OnInit } from '@angular/core';
export interface Categorie {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  selectedValue: string;


  categories: Categorie [] = [
    {value: 1, viewValue: 'Location immobiliers'},
    {value: 2, viewValue: 'Vente immobiliers'},
    {value: 3, viewValue: 'Vente voitures'},
    {value: 4, viewValue: 'Vente autres articles'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
