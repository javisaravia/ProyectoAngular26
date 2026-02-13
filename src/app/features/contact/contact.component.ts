import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    submitSuccess = false;
    submitError = false;

    constructor(
        private fb: FormBuilder,
        private portfolioService: PortfolioService
    ) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;
            this.submitSuccess = false;
            this.submitError = false;

            this.portfolioService.sendMessage(this.contactForm.value).subscribe({
                next: () => {
                    this.isSubmitting = false;
                    this.submitSuccess = true;
                    this.contactForm.reset();
                },
                error: () => {
                    this.isSubmitting = false;
                    this.submitError = true;
                }
            });
        } else {
            this.contactForm.markAllAsTouched();
        }
    }

    get f() { return this.contactForm.controls; }
}
