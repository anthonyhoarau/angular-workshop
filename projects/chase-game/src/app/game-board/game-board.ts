import {Component, inject} from '@angular/core';
import {GameEngine} from './engine/game-engine';
import {IoClient, PlayerPosition} from '@chase-game/client';
import {toSignal} from '@angular/core/rxjs-interop';

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

  players = toSignal(this.ioClient.playerList$, {requireSync: true});
  playerName = this.ioClient.playerName;

  protected onPositionUpdate(position: PlayerPosition) {
    this.ioClient.sendPosition(position);
  }
}
