import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeList } from './committee-list';

describe('CommitteeList', () => {
  let component: CommitteeList;
  let fixture: ComponentFixture<CommitteeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
