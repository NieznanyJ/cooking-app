import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiePageComponent } from './recepie-page.component';

describe('RecepiePageComponent', () => {
  let component: RecepiePageComponent;
  let fixture: ComponentFixture<RecepiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepiePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
