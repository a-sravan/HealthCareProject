import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical-care-paln',
  templateUrl: './clinical-care-paln.component.html',
  styleUrls: ['./clinical-care-paln.component.css']
})
export class ClinicalCarePalnComponent implements OnInit {

  constructor() { }
  public showRequestcall() {
    const showreq = document.getElementById('showcallpopup');
    if (showreq) {
      showreq.style.display = "block";
    }
  }

  public closeCallReq() {
    const closecallreq = document.getElementById('showcallpopup');
    if (closecallreq) {
      closecallreq.style.display = "none";
    }
  }
  ngOnInit(): void {
  }

}
