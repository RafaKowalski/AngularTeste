import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaNovoComponent } from './categoria-novo/categoria-novo.component';

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaComponent,
    data: { title: 'categoria'}
  },
  {
    path: 'categoria-novo',
    component: CategoriaNovoComponent,
    data: { title: 'Adicionar Categoria'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
