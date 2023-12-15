import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* 
const routes: Routes = [
    {path: 'inicio', component: MainComponent},
    {path: 'todoList', component: ProyectoUnoComponent},
    {path: 'simpsons', component: SimpsonsComponent},
    {path: 'proyectoTres', component: ProyectoTresComponent},
    /// otras rutas
    {path: '**', pathMatch:'full', redirectTo: 'MainComponent'},
];

export const routing = RouterModule.forRoot(routes);
*/