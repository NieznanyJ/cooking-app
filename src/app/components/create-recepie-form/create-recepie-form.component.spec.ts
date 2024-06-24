import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecepieFormComponent } from './create-recepie-form.component';

describe('CreateRecepieFormComponent', () => {
  let component: CreateRecepieFormComponent;
  let fixture: ComponentFixture<CreateRecepieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecepieFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecepieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
