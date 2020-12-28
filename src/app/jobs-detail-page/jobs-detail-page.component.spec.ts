import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDetailPageComponent } from './jobs-detail-page.component';

describe('JobsDetailPageComponent', () => {
  let component: JobsDetailPageComponent;
  let fixture: ComponentFixture<JobsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
