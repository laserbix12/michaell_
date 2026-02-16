import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-porterias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './porterias.html' // He quitado ".component" porque en tu carpeta no lo tiene
})
export class PorteriasComponent {
  titulo = 'Porterías de Fútbol';

  productos = [
    { nombre: 'Portería Profesional', precio: 150, oferta: true },
    { nombre: 'Portería Infantil', precio: 45, oferta: false }
  ];
}
