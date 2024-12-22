import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    @Output() categorySelected = new EventEmitter<string>();
  
    categories: string[] = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
  
    selectCategory(category: string) {
      this.categorySelected.emit(category);
    }
  }
