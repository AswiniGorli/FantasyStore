import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpideyComponent } from './spidey.component';

describe('SpideyComponent', () => {
  let component: SpideyComponent;
  let fixture: ComponentFixture<SpideyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpideyComponent]
    });
    fixture = TestBed.createComponent(SpideyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
