import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    // Mock data representing a high-level frontend developer portfolio
    private projects: Project[] = [
        {
            id: 1,
            title: 'App Motomanía ',
            description: 'Una aplicación hecha para los amantes de las motos. Posibilidad de crear rutas, crear o unirse a clubes y compartir con otros usuarios tus experiencias.',
            image: 'assets/motomanialogo.png',
            technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'SQL'],
            date: new Date('2025-11-15'),
            featured: true
        },
        {
            id: 2,
            title: 'Look Central',
            description: 'Tienda de ropa creada para los jóvenes.',
            image: 'assets/lookcentral.png',
            technologies: ['JAVA', 'SQL', 'Node.js', 'phpMyAdmin'],
            date: new Date('2025-05-20'),
            featured: true
        }
    ];

    constructor() { }

    /**
     * Returns all projects as an Observable
     */
    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    /**
     * Returns a single project by ID
     * @param id Project ID
     */
    getProjectById(id: number): Observable<Project | undefined> {
        const project = this.projects.find(p => p.id === id);
        return of(project);
    }

    /**
     * Returns featured projects
     */
    getFeaturedProjects(): Observable<Project[]> {
        return of(this.projects.filter(p => p.featured));
    }

    /**
     * Simulates sending a contact message
     * @param contactData The contact form data
     */
    sendMessage(contactData: any): Observable<boolean> {
        // Simulate network delay
        return new Observable(observer => {
            setTimeout(() => {
                console.log('Message sent:', contactData);
                observer.next(true);
                observer.complete();
            }, 1500);
        });
    }
}
