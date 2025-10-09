import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-personajes',
  imports: [NgFor],
  templateUrl: './list-personajes.html',
  styleUrl: './list-personajes.css'
})
export class ListPersonajes {

  personajes = [
    {
      nombre: 'Hugo',
      raza: 'Humano',
      poder: 5,
      imagen: 'nadadeMomento'
    },

    {
      nombre: 'Maria',
      raza: 'Elfo',
      poder: 5,
      imagen: 'nadadeMomento'

    },
    {
      nombre: 'Michu',
      raza: 'Orco',
      poder: 1,
      imagen: 'nadadeMomento'

    },
    {
      nombre: 'Gebolo',
      raza: 'Enano',
      poder: 2,
      imagen: 'nadadeMomento'
    },
    {
      nombre: 'Guille',
      raza: 'Flipao',
      poder: 3,
      imagen: 'nadadeMomento'
    }
]

}
