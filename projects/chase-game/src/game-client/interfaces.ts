export interface PlayerPosition {
  x: number;
  y: number;
}

export interface Player {
  name: string;
  position: PlayerPosition;
}

export type Players = Record<string, PlayerPosition>;
