import { Component } from '@angular/core';


@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.css']
})
export class CardCompanyComponent {
  sueldos = [1700, 1600, 1900,3,1,23,4,42,32,323];
  imagenes = [
    { id: 'button1', imagenUrl: 'assets/img/favorito.png', seleccionada: true },
    { id: 'button2', imagenUrl: 'assets/img/favorito.png', seleccionada: false },
    { id: 'button3', imagenUrl: 'assets/img/favorito.png', seleccionada: false },
    { id: 'button2', imagenUrl: 'assets/img/favorito.png', seleccionada: false },
    { id: 'button2', imagenUrl: 'assets/img/favorito.png', seleccionada: false },
    { id: 'button2', imagenUrl: 'assets/img/favorito.png', seleccionada: false },
    { id: 'button2', imagenUrl: 'assets/img/favorito.png', seleccionada: false }
  ];
  seleccionarImagen(i: number) {
    this.imagenes.forEach((imagen, index) => {
      if (i === index) {
        imagen.seleccionada = true;
      } else {
        imagen.seleccionada = false;
      }
    });
  }
}
