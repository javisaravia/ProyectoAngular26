import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var bootstrap: any; // Use Bootstrap JS via global variable

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
    isAudioPlaying = false;
    isBrowser = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() { }

    ngAfterViewInit() {
        if (this.isBrowser) {
            this.initTooltips();
            this.showWelcomeModal();
        }
    }

    initTooltips() {
        try {
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        } catch (e) {
            console.warn('Bootstrap tooltips failed to init', e);
        }
    }

    showWelcomeModal() {
        try {
            const modalElement = document.getElementById('welcomeModal');
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            }
        } catch (e) {
            console.warn('Bootstrap modal failed to show', e);
        }
    }

    toggleAudio() {
        const audio = this.audioPlayer.nativeElement;
        if (this.isAudioPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Audio play failed", e));
        }
        this.isAudioPlaying = !this.isAudioPlaying;
    }

    acceptAudio() {
        const audio = this.audioPlayer.nativeElement;
        audio.play().then(() => {
            this.isAudioPlaying = true;
        }).catch(e => console.error("Audio play failed", e));
    }
}
