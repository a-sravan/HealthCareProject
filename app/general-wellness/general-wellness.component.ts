import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-wellness',
  templateUrl: './general-wellness.component.html',
  styleUrls: ['./general-wellness.component.css']
})
export class GeneralWellnessComponent implements OnInit {
  tabId: number = 1
  public showEvent:boolean;


  constructor() {
    this.showEvent = false;
   }

  ngOnInit(): void {
  }

  public toggleEvent() {
    this.showEvent = !this.showEvent;
  }

  tabslider(tab: number) {
    this.tabId = tab;

  }

}
