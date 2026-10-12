import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Techstack } from '../techstack/techstack';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-main-page',
  imports: [Hero, Techstack, Projects],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
