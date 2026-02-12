import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero'
import {Navbar} from './navbar/navbar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
