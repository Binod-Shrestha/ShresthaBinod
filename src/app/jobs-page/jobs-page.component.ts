import { Component, OnInit } from '@angular/core';
import {Jobs} from '../types';
import {jobLists} from '../dummy-data';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {
jobs: Jobs[] = [];
  constructor() { }

  ngOnInit(): void {
    this.jobs = jobLists;
  }

}
