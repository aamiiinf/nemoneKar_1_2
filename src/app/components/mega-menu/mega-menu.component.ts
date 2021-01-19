import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
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
    if(n >= 100){
     this.isTrue = true;
     console.log(n);
    }else if(n < 80){
     this.isTrue = false;
    console.log(n);
    }
  }


  openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
}
