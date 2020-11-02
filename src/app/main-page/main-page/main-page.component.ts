import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/banners.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  banners: any;

  constructor(
    private bannersService: BannersService
  ) { }

  ngOnInit(): void {
    this.banners = this.bannersService.getBanners();
  }

}
