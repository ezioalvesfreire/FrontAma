import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';


@Component({
  selector: 'ngx-ama',
  templateUrl: './ama.component.html',
  styleUrls: ['./ama.component.scss']
})
export class AmaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = MENU_ITEMS;
 // public items: any;
}
