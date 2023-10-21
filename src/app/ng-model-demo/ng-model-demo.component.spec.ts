import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelDemoComponent } from './ng-model-demo.component';

describe('NgModelDemoComponent', () => {
  let component: NgModelDemoComponent;
  let fixture: ComponentFixture<NgModelDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
