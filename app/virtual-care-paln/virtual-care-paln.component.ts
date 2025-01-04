import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-care-paln',
  templateUrl: './virtual-care-paln.component.html',
  styleUrls: ['./virtual-care-paln.component.css']
})
export class VirtualCarePalnComponent implements OnInit {

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
