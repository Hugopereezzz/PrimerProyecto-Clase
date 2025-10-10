import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Matatopos } from './components/matatopos/matatopos';
import { NgIf } from '@angular/common';
import { NavBar } from './components/nav-bar/nav-bar';
import { Carrera } from './components/carrera/carrera';
import { PasoParametros } from './components/paso-parametros/paso-parametros';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Matatopos, NgIf, NavBar, Carrera, PasoParametros,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
