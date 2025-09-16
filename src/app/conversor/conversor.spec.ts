import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conversor } from './conversor';

describe('Conversor', () => {
  let component: Conversor;
  let fixture: ComponentFixture<Conversor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Conversor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conversor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
