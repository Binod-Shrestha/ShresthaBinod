import { Component, OnInit } from '@angular/core';
import {Volunteer} from '../types';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css']
})
export class VolunteerPageComponent implements OnInit {
toggleDiv = false;
  panelOpenState = false;
volunteers: Volunteer[]=[];
  constructor(private _volunteerService: PortfolioService) { }

  ngOnInit(): void {
    this.volunteers = this._volunteerService.getVolunteer();
  }
// onToggleDiv(){
//     this.toggleDiv = !this.toggleDiv ? true : false;
// }
}
