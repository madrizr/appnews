import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() paramsSelected = new EventEmitter<any>()
  
  selected_category: string = 'general';
  selected_country: string = 've';

  categories: any[] = [
    { value: 'general', name: 'General'},
    { value: 'business', name: 'Negocios'},
    { value: 'sport', name: 'Deportes'},
    { value: 'entertainment', name: 'Entretenimiento'},
    { value: 'health', name: 'Salud'},
    { value: 'sciences', name: 'Ciencia'},
    { value: 'technology', name: 'Tecnologia'}
  ]

  countries: any[] = [
    { value: 've', name: 'Venezuela'},
    { value: 'ar', name: 'Argentina'},
    { value: 'mx', name: 'Mexico'},
    { value: 'br', name: 'Brasil'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  searchNew(){
    const params = {
      category: this.selected_category,
      country: this.selected_country
    }
    this.paramsSelected.emit(params)
  }

}
