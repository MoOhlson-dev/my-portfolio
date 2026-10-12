import { Component, signal } from '@angular/core';
import { Contact } from '../contact/contact';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [Contact, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());
}
