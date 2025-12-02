import {Component, inject} from '@angular/core';
import {GameEngine} from './engine/game-engine';
import {IoClient, PlayerPosition} from '@chase-game/client';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss',
  imports: [
    GameEngine
  ]
})
export class GameBoard {
  private ioClient = inject(IoClient);

  players = {};
  playerName = this.ioClient.playerName;

  protected onPositionUpdate(position: PlayerPosition) {
    this.ioClient.sendPosition(position);
  }
}
