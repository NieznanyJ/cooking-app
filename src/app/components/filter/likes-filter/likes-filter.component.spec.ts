import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesFilterComponent } from './likes-filter.component';

describe('LikesFilterComponent', () => {
  let component: LikesFilterComponent;
  let fixture: ComponentFixture<LikesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikesFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
