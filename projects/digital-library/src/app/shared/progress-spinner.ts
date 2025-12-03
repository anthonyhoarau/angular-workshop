import { Component } from '@angular/core';

@Component({
  selector: 'progress-spinner',
  template: `
    <div class="progress-spinner-inner">
      <svg class="progress-spinner-svg" viewBox="25 25 50 50" style="animation-duration: 2s">
        <circle
          class="progress-spinner-circle"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  `,
  styleUrl: './progress-spinner.scss',
  host: {
    '[attr.aria-busy]': 'true',
    '[attr.role]': `'progressbar'`,
  },
})
export class ProgressSpinner {}
