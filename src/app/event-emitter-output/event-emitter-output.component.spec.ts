import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterOutputComponent } from './event-emitter-output.component';

describe('EventEmitterOutputComponent', () => {
  let component: EventEmitterOutputComponent;
  let fixture: ComponentFixture<EventEmitterOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
