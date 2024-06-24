import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiespageComponent } from './recepiespage.component';

describe('RecepiespageComponent', () => {
  let component: RecepiespageComponent;
  let fixture: ComponentFixture<RecepiespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepiespageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
