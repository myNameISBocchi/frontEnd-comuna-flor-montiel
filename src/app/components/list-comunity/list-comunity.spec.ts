import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComunity } from './list-comunity';

describe('ListComunity', () => {
  let component: ListComunity;
  let fixture: ComponentFixture<ListComunity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComunity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComunity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
