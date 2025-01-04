import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregiver-care-paln',
  templateUrl: './caregiver-care-paln.component.html',
  styleUrls: ['./caregiver-care-paln.component.css']
})
export class CaregiverCarePalnComponent implements OnInit {

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
