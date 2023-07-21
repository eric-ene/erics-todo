import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarItem } from '../sidebar-item';

import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarItemComponent
  ],
  template: `
    <div class="nav">
      <app-sidebar-item 
        *ngFor="let myItem of itemList"
        [itemData]="myItem">
      </app-sidebar-item>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  itemList: SidebarItem[] = [
    {
      icon: "",
      content: "Click me!",
      link: "/",
    },
    {
      icon: "T",
      content: "Click me also!",
      link: "/",
    }
  ];
}
