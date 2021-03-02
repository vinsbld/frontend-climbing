import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEscaladeComponent } from './site-escalade.component';

describe('SiteEscaladeComponent', () => {
  let component: SiteEscaladeComponent;
  let fixture: ComponentFixture<SiteEscaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteEscaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEscaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
