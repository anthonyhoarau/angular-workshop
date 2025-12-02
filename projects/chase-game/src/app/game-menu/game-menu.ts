import {Component, computed, inject, signal} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IoClient} from '@chase-game/client';

@Component({
  selector: 'game-menu',
  templateUrl: './game-menu.html',
  imports: [
    FormsModule
  ],
  styleUrl: './game-menu.scss'
})
export class GameMenu {
  protected playerName = signal<string | null>(null);

  protected startGameDisabled = computed<boolean>(() => {
    const name = this.playerName();
    return !name || !name.trim().length;
  });

  private isPlayerFilled = computed(() => !this.startGameDisabled());

  private router = inject(Router);
  private ioClient = inject(IoClient);

  protected async startGame() {
    if (this.isPlayerFilled()) {
      const registered = await this.ioClient.registerNewPlayer(this.playerName());
      if (registered) {
        this.router.navigate(['board']);
      }
    }
  }
}
