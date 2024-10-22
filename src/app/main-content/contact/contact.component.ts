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

  submitted = false;
  feedbackMessage: string = '';
  buttonText: string = 'Say hello!'

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

   onSubmit(ngForm: NgForm) {
    this.submitted = true;
    if (ngForm.submitted && ngForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.feedbackMessage = `Vielen Dank, ${this.contactData.name}! Ihre Nachricht wurde gesendet.`;
            ngForm.resetForm();
            this.submitted = false;
  
            setTimeout(() => {
            }, 3000);
          },
          error: (error) => {
            console.error(error); 
          },
          complete: () => console.info('send post complete'), 
        });
    }
  }}