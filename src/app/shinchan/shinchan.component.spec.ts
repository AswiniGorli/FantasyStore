import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinchanComponent } from './shinchan.component';

describe('ShinchanComponent', () => {
  let component: ShinchanComponent;
  let fixture: ComponentFixture<ShinchanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShinchanComponent]
    });
    fixture = TestBed.createComponent(ShinchanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
