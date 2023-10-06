import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackcarouselComponent } from './stackcarousel.component';

describe('StackcarouselComponent', () => {
  let component: StackcarouselComponent;
  let fixture: ComponentFixture<StackcarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackcarouselComponent]
    });
    fixture = TestBed.createComponent(StackcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
