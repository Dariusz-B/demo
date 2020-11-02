import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-banners',
  templateUrl: './main-page-banners.component.html',
  styleUrls: ['./main-page-banners.component.scss']
})
export class MainPageBannersComponent implements OnInit {

  @Input() banners: any;

  constructor() { }

  ngOnInit(): void {
  }

}
