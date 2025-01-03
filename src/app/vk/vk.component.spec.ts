import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkComponent } from './vk.component';

describe('VkComponent', () => {
  let component: VkComponent;
  let fixture: ComponentFixture<VkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VkComponent]
    });
    fixture = TestBed.createComponent(VkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
