import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overseas-services',
  templateUrl: './overseas-services.component.html',
  styleUrls: ['./overseas-services.component.css']
})
export class OverseasServicesComponent implements OnInit {
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
