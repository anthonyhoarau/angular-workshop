import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<div id="game-border-1"><div id="game"><router-outlet /></div></div>`,
  styleUrl: './app.scss'
})
export class App {}
