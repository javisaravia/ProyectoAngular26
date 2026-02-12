import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export class AppRoutingModule { } // Keep class for compatibility if needed, but we export routes const

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Alex | Desarrollador Frontend'
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
        title: 'Portafolio | Alex'
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contacto | Alex'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
