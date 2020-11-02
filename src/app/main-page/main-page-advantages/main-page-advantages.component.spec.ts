import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAdvantagesComponent } from './main-page-advantages.component';

describe('MainPageAdvantagesComponent', () => {
  let component: MainPageAdvantagesComponent;
  let fixture: ComponentFixture<MainPageAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
