import { Component} from '@angular/core';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss']
})
export class MainTopComponent{
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
    if(n >= 80){
      this.isTrue = true;
      console.log(n);
    }else if(n < 120){
      this.isTrue = false;
      console.log(n);
    }
  }
}
