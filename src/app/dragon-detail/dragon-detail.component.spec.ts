import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDetailComponent } from './dragon-detail.component';

describe('DragonDetailComponent', () => {
  let component: DragonDetailComponent;
  let fixture: ComponentFixture<DragonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
