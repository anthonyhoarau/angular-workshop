import {PlayerPosition, Players} from '@chase-game/client';
import {Component, computed, effect, ElementRef, inject, input, output, ViewEncapsulation} from '@angular/core';
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
  playerName = input<string | null>();

  players = input<Players>({});

  playerPositionUpdate = output<PlayerPosition>();

  private currentPlayerPosition = computed(() => {
    const players = this.players();
    const playerName = this.playerName();
    if (playerName && players[playerName]) {
      return players[playerName];
    }
    return null;
  });

  private gameBoard = inject(ElementRef<HTMLElement>);

  constructor() {
    // When players change, redraw them on board
    effect(() => {
      this.drawPlayers(this.players());
    });

    this.movementManager();
  }

  // To be called to draw all players on board
  private drawPlayers(players: Players) {
    this.gameBoard.nativeElement.innerHTML = '';
    Object.keys(players).forEach((playerName, index) => {
      const el = this.createPlayer(index);
      this.setPosition(el, players[playerName]);
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
    const currentPosition = this.currentPlayerPosition();
    if (!currentPosition) return;

    let updated = false;
    const position = {...currentPosition};
    switch (event.key) {
      case 'ArrowUp':
        position.y--;
        updated = true;
        break;
      case 'ArrowDown':
        position.y++;
        updated = true;
        break;
      case 'ArrowLeft':
        position.x--;
        updated = true;
        break
      case 'ArrowRight':
        position.x++;
        updated = true;
        break;
    }

    if (updated) {
      this.playerPositionUpdate.emit(position);
    }
  }
}
