import {Player, PlayerPosition} from '@chase-game/client';
import {Component, effect, ElementRef, inject, input, output, ViewEncapsulation} from '@angular/core';
import {COLORS} from './colors';
import {fromEvent} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-engine',
  template: '',
  styleUrl: './game-engine.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GameEngine {
  playerName: string | null = 'Player 1';
  players = input<Player[]>([{name: 'Player 1', position: {x: 5, y: 8}}]);

  playerPositionUpdate = output<PlayerPosition>();

  private currentPlayerPosition: PlayerPosition | null = {x: 5, y: 8};

  private gameBoard = inject(ElementRef<HTMLElement>);

  constructor() {
    this.movementManager();
    effect(() => {
      const players = this.players();
      this.drawPlayers(players);
    });
  }

  private drawPlayers(players: Player[]) {
    players.forEach((player, index) => {
      const el = this.createPlayer(index);
      this.setPosition(el, player.position);
      this.gameBoard.nativeElement.appendChild(el);
    })
  }

  private createPlayer(index: number) {
    const el = document.createElement('div');
    el.className = 'player';
    el.style = `background: ${COLORS[index % COLORS.length]}`
    return el;
  }

  private setPosition(el: HTMLElement, position: PlayerPosition) {
    el.style.gridColumn = String(position.x);
    el.style.gridRow = String(position.y);
  }

  private movementManager() {
    fromEvent<KeyboardEvent>(document, 'keydown').pipe(takeUntilDestroyed()).subscribe((event) => this.handleKeydown(event));
  }

  private handleKeydown(event: KeyboardEvent) {
    if (!this.currentPlayerPosition) return;

    const position = {...this.currentPlayerPosition};
    switch (event.key) {
      case 'ArrowUp':
        position.y--;
        break;
      case 'ArrowDown':
        position.y++;
        break;
      case 'ArrowLeft':
        position.x--;
        break
      case 'ArrowRight':
        position.x++;
        break;
    }

    this.playerPositionUpdate.emit(position);
  }
}


function findCurrentPlayerByName(players: Player[], name: string) {
  return players.find(player => player.name === name);
}
