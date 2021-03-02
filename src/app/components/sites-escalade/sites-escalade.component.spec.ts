import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesEscaladeComponent } from './sites-escalade.component';

describe('SitesEscaladeComponent', () => {
  let component: SitesEscaladeComponent;
  let fixture: ComponentFixture<SitesEscaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesEscaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesEscaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
