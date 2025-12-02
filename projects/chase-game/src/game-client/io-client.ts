import {Injectable} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {BehaviorSubject} from 'rxjs';
import {PlayerPosition, Players} from './interfaces';

@Injectable()
export class IoClient {
  /** Stream of connected players with positions */
  get playerList$() {
    return this.players$.asObservable()
  }

  /** The player name for the current session */
  get playerName() {
    return this.internalPlayerName;
  }

  private socket?: Socket;

  private players$ = new BehaviorSubject<Players>({});

  private internalPlayerName: string | null = null;

  private playerUpdatesListener = (players: Players) => this.players$.next({...players});

  openConnection() {
    return new Promise<void>((resolve) => {
      this.socket = io('http://localhost:3000');
      this.socket.on('connect', () => {
        console.info('Connected to server');
        resolve();
        this.listenPlayerUpdates();
      });
    })

  }

  async registerNewPlayer(name: string | null) {
    return new Promise<boolean>((resolve, reject) => {
      if (!name || !name.trim().length) {
        reject('Player name is required');
        return;
      }
      this.internalPlayerName = name;
      const randomPosition: PlayerPosition = {x: getRandomIntInclusive(1, 20), y: getRandomIntInclusive(1, 20)};
      this.socket?.emit('new-player', name, randomPosition, ((success: boolean) => resolve(success)));
    })

  }

  sendPosition(position: PlayerPosition) {
    if (!this.internalPlayerName) return;
    this.socket?.volatile.emit('player-position', this.internalPlayerName, position);
  }

  private listenPlayerUpdates() {
    this.socket?.off('player-updates', this.playerUpdatesListener);
    this.socket?.on('player-updates', this.playerUpdatesListener);
  }
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
