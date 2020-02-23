import { Component, Input } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'hello',
  template: `<h1 class="wow  fadeIn" data-wow-duration="5s">Hello {{name}}!</h1>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements ngAfterViewInit {
  ngAfterViewInit(){

   new WOW().init();
 }
  @Input() name: string;
}
