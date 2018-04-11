import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav [opened]="open" disableClose>
    <p><button mat-button (click)="closeSideNav.emit()">Close</button></p>
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
    mat-sidenav {
      width: 300px;
    }
  `,
  ],
})
export class SidenavComponent {
  @Input() open = false;
  @Output() closeSideNav = new EventEmitter();
}
