import {Injectable} from '@angular/core';
import {io, Socket} from 'socket.io-client';
import {BehaviorSubject} from 'rxjs';
import {Player, PlayerPosition} from './interfaces';

@Injectable()
export class IoClient {
  private socket?: Socket;

  private players$ = new BehaviorSubject<Player[]>([]);

  private currentPlayerName: string | null = null;

  openConnection() {
    this.socket = io('http://localhost:8084');
    this.socket.on('connect', () => {
      console.info('Connected to server');
      return Promise.resolve();
    });
  }

  registerNewPlayer(name: string) {
    this.currentPlayerName = name;
    const randomPosition: PlayerPosition = {x: getRandomIntInclusive(1, 20), y: getRandomIntInclusive(1, 20)};
    this.socket?.emit('new-player', {name, position: randomPosition} as Player);
  }

  sendPosition(position: PlayerPosition) {
    this.socket?.volatile.emit('player-position', {name: this.currentPlayerName, position} as Player);
  }
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
