import { Component, input, signal } from '@angular/core';
import { TechSkill } from '../../models';

@Component({
  selector: 'app-techskill-card',
  imports: [],
  templateUrl: './techskill-card.html',
  styleUrl: './techskill-card.css',
})
export class TechskillCard {
  // A project-card needs an input when created
  readonly techskill = input.required<TechSkill>();
  //variable for seeing if the techskill card is showing its category and description.
  readonly isOpen = signal(false);
}
