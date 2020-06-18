import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categoria } from '../Modelo/Categoria';
import { Producto } from '../Modelo/Producto';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlCategoria='http://localhost:9090/examen/categoria';
  UrlProducto='http://localhost:9090/examen/producto';


  getCategorias(){
    return this.http.get<Categoria[]>(this.UrlCategoria);
  }
  createCategorias(categoria: Categoria) {
    return this.http.post<Categoria>(this.UrlCategoria, categoria);
  }
  getCategoriasById(id: number){
    return this.http.get<Categoria>(this.UrlCategoria+"/"+ id); 
  }
  updateCategoria(categoria: Categoria){
    return this.http.put<Categoria>(this.UrlCategoria+"/modificar/"+ categoria.idcategoria,categoria);
  }
  deleteCategoria(categoria:Categoria){
    return this.http.delete<Categoria>(this.UrlCategoria+"/eliminar/"+categoria.idcategoria);
  }

  // PRODUCTO

  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.UrlProducto);
  }
  getProductoById(idproducto: number) {
    return this.http.get<Producto>(this.UrlProducto+"/"+idproducto);
  }
  createProducto(producto: Producto) {
    return this.http.post<Producto>(this.UrlProducto, producto);
  }
  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.UrlProducto +"/modificar/"+ producto.idproducto, producto);
  }
  deleteProducto(producto: Producto) {
    return this.http.get<Producto>(this.UrlProducto +"/eliminar/"+ producto.idproducto);
  }

}
