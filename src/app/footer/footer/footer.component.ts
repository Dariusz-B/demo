import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('toggleFooter', [
      state('true', style({  padding: 'initial', height: '*' })),
      state('false', style({ padding: 0, height: '0px' })),
      transition('1 => 0', animate('300ms ease-in')),
      transition('0 => 1', animate('300ms ease-out'))
  ])
  ]
})
export class FooterComponent implements OnInit {

  footer: any;
  whichOpen: number;

  constructor(
    private footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.footerService.getFooter().subscribe(response => {
      this.footer = response['content'];
      console.log(this.footer);
    })
  }

  showFooterList(index: number) {
    this.whichOpen = this.whichOpen === index ? -1 : index
  }

}
