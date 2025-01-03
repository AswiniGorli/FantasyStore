import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionComponent } from './devotion.component';

describe('DevotionComponent', () => {
  let component: DevotionComponent;
  let fixture: ComponentFixture<DevotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevotionComponent]
    });
    fixture = TestBed.createComponent(DevotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
