import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieListPageComponent } from './veggie-list-page.component';

describe('VeggieListPageComponent', () => {
  let component: VeggieListPageComponent;
  let fixture: ComponentFixture<VeggieListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeggieListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeggieListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
