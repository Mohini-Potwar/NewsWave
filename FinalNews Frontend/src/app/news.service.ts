import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'e468c2f741a445fd962db992b9d4eb82'; // Replace with your News API key
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey' + this.apiKey;

  constructor(private http: HttpClient) {}

  getArticlesByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`);

  }
  
}