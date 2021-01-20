import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-asli',
  templateUrl: './page-asli.component.html',
  styleUrls: ['./page-asli.component.scss']
})
export class PageAsliComponent implements OnInit {
  public isTrue;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}
  scroll = (event): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n >= 700){
      this.isTrue = true;
    }else if(n < 800){
      this.isTrue = false;
    }
  }


  Up($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
