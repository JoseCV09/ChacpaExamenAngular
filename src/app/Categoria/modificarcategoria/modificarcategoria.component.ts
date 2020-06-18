import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-modificarcategoria',
  templateUrl: './modificarcategoria.component.html',
  styleUrls: ['./modificarcategoria.component.css']
})
export class ModificarcategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.EditarCategoria();
  }
  EditarCategoria(){
    let id_obtenido = localStorage.getItem("idcategoria");
    this.service.getCategoriasById(+id_obtenido).subscribe(data=>{
      this.categoria = data;
    })
  }
  ActualizarCategoria(categoria:Categoria){
    this.service.updateCategoria(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarcategoria"]);
    })
  }
}
