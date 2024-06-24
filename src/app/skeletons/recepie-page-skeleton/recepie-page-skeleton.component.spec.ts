import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiePageSkeletonComponent } from './recepie-page-skeleton.component';

describe('RecepiePageSkeletonComponent', () => {
  let component: RecepiePageSkeletonComponent;
  let fixture: ComponentFixture<RecepiePageSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepiePageSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiePageSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
