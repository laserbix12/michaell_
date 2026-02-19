import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Catálogo de Deportes</h1>
      <ul>
        <li *ngFor="let item of items" style="margin: 10px 0; font-size: 1.2em;">
          {{ item }}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class AppComponent {
  items = [
    'PING PONG',
    'PORTERIAS',
    'CANASTAS',
    'FUTBOLINES',
    'AIR HOCKEY',
    'MULTIJUEGOS',
    'BILLARES',
    'TRAMPOLINES'
  ];
}