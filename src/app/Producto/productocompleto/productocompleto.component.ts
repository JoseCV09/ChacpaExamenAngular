import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Producto } from "src/app/Modelo/Producto";
import { Categoria } from "src/app/Modelo/Categoria";
@Component({
  selector: 'app-productocompleto',
  templateUrl: './productocompleto.component.html',
  styleUrls: ['./productocompleto.component.css']
})
export class ProductocompletoComponent implements OnInit {

  productos:Producto[];
  categorias: Categoria[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getProducto().subscribe(data=>{
      this.productos=data;
    })
  }

}
