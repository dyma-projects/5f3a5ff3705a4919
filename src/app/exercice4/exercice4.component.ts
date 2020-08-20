import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
 public texts : Array<string> ;
  constructor() {
    this.texts = new Array("un","deux","trois");

   }

  ngOnInit(): void {
  }

}
