import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueOfCollectionComponent } from './value-of-collection.component';

describe('ValueOfCollectionComponent', () => {
  let component: ValueOfCollectionComponent;
  let fixture: ComponentFixture<ValueOfCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueOfCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueOfCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
