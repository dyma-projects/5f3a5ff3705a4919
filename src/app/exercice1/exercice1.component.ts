import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public name : string;
  public title : string;
  constructor() {
    this.name = 'Mounir';
    this.title = 'Click here';
   }

  ngOnInit(): void {
  }
  showAlert(): void{
    alert('Clicked !');
  }

}
