import { Injectable } from '@angular/core';
import { newsApi } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(params:any){
    const key = newsApi.API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&apiKey=${key}`
    return this.http.get(url)
  }

}
