import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueByPublisherComponent } from './value-by-publisher.component';

describe('ValueByPublisherComponent', () => {
  let component: ValueByPublisherComponent;
  let fixture: ComponentFixture<ValueByPublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueByPublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueByPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
