import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmploNgContentComponent } from './exmplo-ng-content.component';

describe('ExmploNgContentComponent', () => {
  let component: ExmploNgContentComponent;
  let fixture: ComponentFixture<ExmploNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExmploNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmploNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
