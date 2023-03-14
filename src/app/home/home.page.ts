import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scrollTop = 0;
  sticky = false; // Whether Header B is sticky
  headerAHeight = 100; // Height of the top header in pixels

  items: number[] = [];
  constructor() { 
    while (this.items.length < 100) {
      this.items.push(this.items.length+1);
    }   
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    this.scrollTop = ev.detail.scrollTop;    
  }

}
