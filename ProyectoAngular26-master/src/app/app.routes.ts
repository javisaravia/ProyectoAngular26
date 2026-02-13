import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Javier | Desarrollador Frontend'
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
        title: 'Portafolio | Javier'
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contacto | Javier'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
