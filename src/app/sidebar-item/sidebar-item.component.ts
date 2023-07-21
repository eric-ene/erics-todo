import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarItem } from '../sidebar-item';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <a [routerLink]="[itemData.link]">
      <p id="icon">{{ itemData.icon }}</p>
      <p id="content">{{ itemData.content }}</p>
    </a>
  `,
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() itemData!: SidebarItem;
}
