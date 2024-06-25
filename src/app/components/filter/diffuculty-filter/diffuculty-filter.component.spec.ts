import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffucultyFilterComponent } from './diffuculty-filter.component';

describe('DiffucultyFilterComponent', () => {
  let component: DiffucultyFilterComponent;
  let fixture: ComponentFixture<DiffucultyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffucultyFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffucultyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
