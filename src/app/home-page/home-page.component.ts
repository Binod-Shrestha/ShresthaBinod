import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   clsFront = '';
   showCard: Boolean = false;
   currentDate: string;

  constructor() { }
  ngOnInit(): void {
    setInterval(() =>{
      this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    },1000)


  }
  displayMore(){
    this.showCard = this.showCard ? false : true;
  }

scroll(){
    document.getElementById("target").scrollIntoView({behavior:'smooth'});
}
}
