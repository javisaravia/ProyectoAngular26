import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    projects$!: Observable<Project[]>;

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.projects$ = this.portfolioService.getProjects();
    }
}
