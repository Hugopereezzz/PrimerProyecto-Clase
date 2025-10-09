import { Routes } from '@angular/router';
import { Contador } from './components/contador/contador';
import { Matatopos } from './components/matatopos/matatopos';
import { Carrera } from './components/carrera/carrera';
import { PasoParametros } from './components/paso-parametros/paso-parametros';
import { ListPersonajes } from './components/list-personajes/list-personajes';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera},
    { path: 'pasoparametros', component: PasoParametros},
    { path: 'ListPersonajes', component: ListPersonajes},

];