import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WraperComponentComponent } from './wraper-component.component';

describe('WraperComponentComponent', () => {
  let component: WraperComponentComponent;
  let fixture: ComponentFixture<WraperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WraperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WraperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
