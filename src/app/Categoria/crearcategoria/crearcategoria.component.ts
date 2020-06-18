import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-crearcategoria',
  templateUrl: './crearcategoria.component.html',
  styleUrls: ['./crearcategoria.component.css']
})
export class CrearcategoriaComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) { }
  categoria:Categoria = new Categoria();
  ngOnInit() {

  }
  
  AgregarCategoria(){
    this.service.createCategorias(this.categoria).subscribe(data=>{
      alert("Se ha agregado con exito a "+this.categoria.nombre_cat);
      this.router.navigate(["listarcategoria"]);
  
    })
  }
}
