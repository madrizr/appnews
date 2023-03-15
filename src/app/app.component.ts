import { Component } from '@angular/core';
import { NewsService } from './services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App News';
  list_news: any[] = []
  loading:boolean = false

  constructor(private _newsService: NewsService){}

  searchNews(params: any){
    this.loading = true
    this._newsService.getNews(params).subscribe((res:any) => {
      console.log(res)
      this.list_news = res.articles;
      this.loading = false
    }, error => {
      console.log(error)
    })
  }
}
