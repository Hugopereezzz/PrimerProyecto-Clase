import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Matatopos } from './components/matatopos/matatopos';
import { CommonModule, NgIf } from '@angular/common';
import { NavBar } from './components/nav-bar/nav-bar';
import { Carrera } from './components/carrera/carrera';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';
import { TarjetaPersonajes } from './components/tarjeta-personajes/tarjeta-personajes';
import { Formulario } from './components/formulario/formulario';
import { KanbanBoard } from './components/kanban-board/kanban-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Matatopos, NgIf, NavBar, Carrera, ListaPersonajes, TarjetaPersonajes, Formulario, KanbanBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrimerProyecto');
  esHalloween: boolean = false;

  
}
