import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../models';


@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  // A project-card needs an input when created
  readonly project = input.required<Project>();
}


