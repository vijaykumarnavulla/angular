import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHeartTextComponentComponent } from './image-heart-text-component.component';

describe('ImageHeartTextComponentComponent', () => {
  let component: ImageHeartTextComponentComponent;
  let fixture: ComponentFixture<ImageHeartTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageHeartTextComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHeartTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
