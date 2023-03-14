import { Component, Input } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  standalone: true,
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss'],
})
export class StickyComponent  {

  @Input() backgroundColor = 'green';
  @Input() set scrollTop(value: number) {    
    const sat = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sat"));
    this.sticky = !!(value > this.headerHeight - sat);
  }

  @Input() headerHeight: number = 100;
  public sticky: boolean = false;

  constructor() { }


}
