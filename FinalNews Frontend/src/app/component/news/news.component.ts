import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HttpClientModule, NavbarComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  articles: any[] = [];
  loading: boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.fetchArticlesByCategory('general'); // Default category
  }

  fetchArticlesByCategory(category: string) {
    this.loading = true;
    this.newsService.getArticlesByCategory(category).subscribe(data => {
      this.articles = data.articles;
      this.loading = false;
    });
  }
}
