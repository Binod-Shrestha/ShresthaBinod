import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   clsFront = '';
   showCard: Boolean = false;
   currentDate: number;

  constructor() { }
  ngOnInit(): void {
    this.currentDate = Date.now();

  }
  displayMore(){
    this.showCard = this.showCard ? false : true;
  }

scroll(){
    document.getElementById("target").scrollIntoView();
}
}
