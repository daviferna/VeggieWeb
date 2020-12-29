import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieInfoPageComponent } from './veggie-info-page.component';

describe('VeggieInfoPageComponent', () => {
  let component: VeggieInfoPageComponent;
  let fixture: ComponentFixture<VeggieInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeggieInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeggieInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
