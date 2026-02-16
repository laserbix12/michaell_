import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './pages/footer/footer';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'servidores',
    loadComponent: () => import('./pages/servidores/servidores').then(m => m.Servidores),
  },
  {
    path: 'pingpong',
    loadComponent: () => import('./pages/pingpong/pingpong').then(m => m.PingpongComponent),
  },
  {
    path: 'canastas',
    loadComponent: () => import('./pages/canastas/canastas').then(m => m.CanastasComponent),
  },
  {
    path: 'porterias',
    loadComponent: () => import('./pages/porterias/porterias').then(m => m.PorteriasComponent),
  },
  {
    path: 'futbolines',
    loadComponent: () => import('./pages/futbolines/futbolines').then(m => m.FutbolinesComponent),
  },
  {
    path: 'air-hockey',
    loadComponent: () => import('./pages/airhockey/airhockey').then(m => m.AirHockeyComponent),
  },
  {
    path: 'multijuegos',
    loadComponent: () => import('./pages/multijuegos/multijuegos').then(m => m.MultijuegosComponent),
  },
  {
    path: 'billares',
    loadComponent: () => import('./pages/billares/billares').then(m => m.BillaresComponent),
  },
  {
    path: 'trampolines',
    loadComponent: () => import('./pages/trampolines/trampolines').then(m => m.TrampolinesComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
