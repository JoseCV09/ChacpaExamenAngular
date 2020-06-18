import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAng';

  constructor(private router:Router){}
  ListarCategoria(){
    this.router.navigate(["listarcategoria"]);
  }
  ProductoCompleto(){
    this.router.navigate(["productocompleto"]);
  }
  
}
