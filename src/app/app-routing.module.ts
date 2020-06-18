import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarcategoriaComponent } from './Categoria/listarcategoria/listarcategoria.component';
import { CrearcategoriaComponent } from './Categoria/crearcategoria/crearcategoria.component';
import { ModificarcategoriaComponent } from './Categoria/modificarcategoria/modificarcategoria.component';
import { ProductocompletoComponent } from './Producto/productocompleto/productocompleto.component';


const routes: Routes = [
  {path:'listarcategoria', component:ListarcategoriaComponent },
  {path:'crearcategoria', component: CrearcategoriaComponent},
  {path:'editarcategoria', component: ModificarcategoriaComponent},
  {path:'productocompleto', component: ProductocompletoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
