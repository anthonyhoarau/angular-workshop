import {Routes} from '@angular/router';
import {GameMenu} from './game-menu/game-menu';
import {GameBoard} from './game-board/game-board';

export const routes: Routes = [
  {
    path: '',
    component: GameMenu
  },
  {
    path: 'board',
    component: GameBoard
  }
];
