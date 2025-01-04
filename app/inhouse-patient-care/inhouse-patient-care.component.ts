import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inhouse-patient-care',
  templateUrl: './inhouse-patient-care.component.html',
  styleUrls: ['./inhouse-patient-care.component.css']
})
export class InhousePatientCareComponent implements OnInit {
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
