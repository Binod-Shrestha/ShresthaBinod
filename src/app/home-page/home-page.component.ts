import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   clsFront = '';
   showCard: Boolean = false;

  constructor() { }
  ngOnInit(): void {

  }
  displayMore(){
    this.showCard = this.showCard ? false : true;
  }

scroll(){
    document.getElementById("target").scrollIntoView();
}
}
