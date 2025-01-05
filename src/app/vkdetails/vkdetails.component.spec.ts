import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkdetailsComponent } from './vkdetails.component';

describe('VkdetailsComponent', () => {
  let component: VkdetailsComponent;
  let fixture: ComponentFixture<VkdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VkdetailsComponent]
    });
    fixture = TestBed.createComponent(VkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
