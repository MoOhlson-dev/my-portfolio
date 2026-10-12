import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
