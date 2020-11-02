import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBannersComponent } from './main-page-banners.component';

describe('MainPageBannersComponent', () => {
  let component: MainPageBannersComponent;
  let fixture: ComponentFixture<MainPageBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
