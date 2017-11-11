import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostValuableIssuesComponent } from './most-valuable-issues.component';

describe('MostValuableIssuesComponent', () => {
  let component: MostValuableIssuesComponent;
  let fixture: ComponentFixture<MostValuableIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostValuableIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostValuableIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
