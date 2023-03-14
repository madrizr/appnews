import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categories: any[] = [
    { value: 'general', name: 'General'},
    { value: 'business', name: 'Negocios'},
    { value: 'sport', name: 'Deportes'}
  ]

  countries: any[] = [
    { value: 'ven', name: 'Venezuela'},
    { value: 'arg', name: 'Argentina'},
    { value: 'mex', name: 'Mexico'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
