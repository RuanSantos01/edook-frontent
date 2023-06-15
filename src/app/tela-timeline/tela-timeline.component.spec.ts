import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTimelineComponent } from './tela-timeline.component';

describe('TelaRegistroComponent', () => {
  let component: TelaTimelineComponent;
  let fixture: ComponentFixture<TelaTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
