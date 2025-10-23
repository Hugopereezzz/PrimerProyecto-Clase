import { Routes } from '@angular/router';
import { Contador } from './components/contador/contador';
import { Matatopos } from './components/matatopos/matatopos';
import { Carrera } from './components/carrera/carrera';
import { PasoParametros } from './components/paso-parametros/paso-parametros';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';
import { FormularioRegistro } from './components/formulario-registro/formulario-registro';
import { KanbanBoard } from './components/kanban-board/kanban-board';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera},
    { path: 'paso-parametros', component: PasoParametros},
    { path: 'lista-personajes', component: ListaPersonajes},
    { path: 'formulario-registro', component: FormularioRegistro},
    { path: 'Kanban', component: KanbanBoard},
];