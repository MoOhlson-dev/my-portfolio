import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
  private readonly scroller = inject(ViewportScroller);

  constructor() {
    //This sets the offset when using angulars anchorscrolling (withInMemoryScrolling)
    this.scroller.setOffset([0, 64]);  //OBS: If the height in styles.css changes, this should also be changed!
  }
}
