import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{
  constructor() { }

  translate = inject(TranslationService);

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    acceptPolicy: false,
  }

  post = {
    endPoint: 'https://galina-antipin.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

   buttonText = 'Send message :)'

   onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && !ngForm.valid) {
      ngForm.controls['name'].markAsTouched();
      ngForm.controls['email'].markAsTouched();
      ngForm.controls['message'].markAsTouched();
      ngForm.controls['privacy'].markAsTouched();
      return;
    }
  
    if (ngForm.submitted && ngForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.buttonText = 'Message was sent!';
  
            setTimeout(() => {
              this.buttonText = 'Send message :)';
            }, 3000);
          },
          error: (error) => {
            console.error(error); 
            this.buttonText = 'Error sending email';
          },
          complete: () => console.info('send post complete'), 
        });
    }
  }}