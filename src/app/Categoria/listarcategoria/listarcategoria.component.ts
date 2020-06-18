import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import { Categoria } from 'src/app/Modelo/Categoria';
@Component({
  selector: 'app-listarcategoria',
  templateUrl: './listarcategoria.component.html',
  styleUrls: ['./listarcategoria.component.css']
})
export class ListarcategoriaComponent implements OnInit {

  categorias:Categoria[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
  }
  AgregarCategoria(){
    this.router.navigate(["crearcategoria"]);
  }
  EditarCategoria(categoria: Categoria){
    localStorage.setItem("idcategoria",categoria.idcategoria.toString());
    this.router.navigate(["editarcategoria"]);
    console.log(categoria.idcategoria);
  }
  EliminarCategoria(categoria: Categoria){
    this.service.deleteCategoria(categoria).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }

}
