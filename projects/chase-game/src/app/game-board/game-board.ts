import {Component} from '@angular/core';
import {GameEngine} from './engine/game-engine';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss',
  imports: [
    GameEngine
  ]
})
export class GameBoard {}
