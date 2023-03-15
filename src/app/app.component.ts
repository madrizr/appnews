import { Component } from '@angular/core';
import { NewsService } from './services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App News';

  constructor(private _newsService: NewsService){}

  searchNews(params: any){
    this._newsService.getNews(params).subscribe((res:any) => {
      console.log(res)
    })
  }
}
