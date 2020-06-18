import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarcategoriaComponent } from './Categoria/listarcategoria/listarcategoria.component';
import { ModificarcategoriaComponent } from './Categoria/modificarcategoria/modificarcategoria.component';
import { CrearcategoriaComponent } from './Categoria/crearcategoria/crearcategoria.component';
import { FormsModule } from "@angular/forms";
import { ServiceService } from '../app/Service/service.service'
import { HttpClientModule} from '@angular/common/http';
import { ProductocompletoComponent } from './Producto/productocompleto/productocompleto.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarcategoriaComponent,
    ModificarcategoriaComponent,
    CrearcategoriaComponent,
    ProductocompletoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
