import { Component, Output, EventEmitter, Input } from '@angular/core';
import { getLoggedIn } from '../../auth/reducers/auth';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button *ngIf="loggedIn" mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {
  @Input() loggedIn: boolean;
  @Output() openMenu = new EventEmitter();
}
