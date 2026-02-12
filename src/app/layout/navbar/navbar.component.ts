import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isMenuCollapsed = true;

    toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }

    closeMenu() {
        this.isMenuCollapsed = true;
    }
}
