import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Project} from '../types';
import {projectLists} from '../dummy-data';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css']
})
export class ProjectDetailsPageComponent implements OnInit {
project: Project;
departmentId;
  constructor(private _portfolioService: PortfolioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this._portfolioService.getProjectById(id);
  }

}
