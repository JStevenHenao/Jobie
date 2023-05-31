import { Component,ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { IconBarService } from '../../service/icon-bar.service';
import { ServiceDto } from 'src/app/dto/serviceDTO';

@Component({
  selector: 'app-services-icon',
  templateUrl: './services-icon.component.html',
  styleUrls: ['./services-icon.component.css']
})
export class ServicesIconComponent implements AfterViewInit,OnInit {
  @ViewChild('contenedor') contenedorRef!: ElementRef;
  @ViewChild('listaIconos') listaIconosRef!: ElementRef;
  @ViewChild('flechaDerecha') flechaDerechaRef!: ElementRef;
  @ViewChild('flechaIzquierda') flechaIzquierdaRef!: ElementRef;

  services:ServiceDto[]=[];

  imagenes = [
    { id: 'button1', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: true, text: "hola" },
    { id: 'button2', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "holahola"},
    { id: 'button3', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "holaholas"},
    { id: 'button4', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "asdw"},
    { id: 'button5', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "weq" },
    { id: 'button6', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "holaasd" },
    { id: 'button7', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hosadla"},
    { id: 'button8', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hoxcvla"},
    { id: 'button9', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hoxzcvla"},
    { id: 'button10', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "ho23la"},
    { id: 'button11', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hoasdla"},
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "holdfasa" },
    { id: 'button13', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hofla"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "ho23la" },
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hxzcvola"},
    { id: 'button16', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hogdfhhbnmla"},
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hdfgobla"},
    { id: 'button13', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hondfgla"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hbvola"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false,text: "hohvbnla" },
    { id: 'button12', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "hvbnmola"},
    { id: 'button14', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "homvbla"},
    { id: 'button15', imagenUrl: 'assets/img/icon-service/favorito.png', seleccionada: false ,text: "23sdf"},


  ];

  constructor(private iconBarService:IconBarService){

  }

  ngOnInit() {
    this.iconBarService.getServices().subscribe(
      (data) => {
        // Aquí puedes manejar los datos recibidos, por ejemplo, asignarlos a una variable en tu componente.
        this.services=data;
        console.log(this.services)
      },
      (error) => {
        // Manejo de errores en caso de que la consulta falle.
        console.error(error);
      }
    );

    this.services.forEach((service, index)=>{
      if (index === 0)
      service.selected=true;
    });


  }

  flechaVisible = false;

  seleccionarImagen(i: number) {
    this.services.forEach((service, index) => {
      service.selected = i === index;
    });
  }

    desplazarDerecha() {
      const contenedor = this.contenedorRef.nativeElement;
      const flechaDerecha = this.flechaDerechaRef.nativeElement;
      const flechaIzquierda = this.flechaIzquierdaRef.nativeElement;

      const scrollLeft = contenedor.scrollLeft;
      const scrollWidth = contenedor.scrollWidth;
      const clientWidth = contenedor.clientWidth;

      const desplazamiento = Math.min(scrollWidth - scrollLeft - clientWidth, 20);

      let startTime: number | null = null;
      const duracion = 500;

      const step = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = timestamp - startTime;
        const porcentaje = Math.min(progress / duracion, 1);
        const desplazamientoActual = desplazamiento * porcentaje;

        contenedor.scrollLeft += desplazamientoActual;

        if (porcentaje < 1) {
          requestAnimationFrame(step);
        } else {
          flechaIzquierda.classList.add('visible');
          console.log(contenedor.scrollLeft);
          console.log(clientWidth);
            console.log(scrollWidth);
          if (contenedor.scrollLeft + clientWidth >= scrollWidth) {
            flechaDerecha.classList.remove('visible');
          }
        }
      };

      requestAnimationFrame(step);
    }

  desplazarIzquierda() {
    const contenedor = this.contenedorRef.nativeElement;
    const flechaIzquierda = this.flechaIzquierdaRef.nativeElement;
    const flechaDerecha = this.flechaDerechaRef.nativeElement;

    const scrollLeft = contenedor.scrollLeft;

    const desplazamiento = Math.min(scrollLeft, 20);

    let startTime: number | null = null;
    const duracion = 500;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const porcentaje = Math.min(progress / duracion, 1);
      const desplazamientoActual = desplazamiento * porcentaje;

      contenedor.scrollLeft -= desplazamientoActual;

      if (porcentaje < 1) {
        requestAnimationFrame(step);
      } else {
        flechaDerecha.classList.add('visible');
        if (contenedor.scrollLeft === 0) {
          flechaIzquierda.classList.remove('visible');
        }
      }
    };

    requestAnimationFrame(step);
  }

  // ...


  ngAfterViewInit() {
  const contenedor = this.contenedorRef.nativeElement;
  const listaIconos = this.listaIconosRef.nativeElement;
  const flechaDerecha = this.flechaDerechaRef.nativeElement;

  if (listaIconos.offsetWidth > contenedor.offsetWidth) {
    this.flechaVisible = true;
    flechaDerecha.classList.add('visible');
  }
  console.log(this.services)
  }
}
