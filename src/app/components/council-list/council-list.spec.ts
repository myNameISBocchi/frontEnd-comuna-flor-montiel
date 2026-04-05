import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilList } from './council-list';

describe('CouncilList', () => {
  let component: CouncilList;
  let fixture: ComponentFixture<CouncilList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouncilList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouncilList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
