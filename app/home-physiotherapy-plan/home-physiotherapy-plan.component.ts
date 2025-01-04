import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home-physiotherapy-plan',
  templateUrl: './home-physiotherapy-plan.component.html',
  styleUrls: ['./home-physiotherapy-plan.component.css']
})
export class HomePhysiotherapyPlanComponent implements OnInit {
public callInfo:any;
  constructor( public commonService:CommonService) { 
    this.callInfo = {
      name: '',
        email: '',
        mobile: '',
        service: 'Elderly',
    }
  }
  public showRequestcall() {
    const showreq = document.getElementById('showcallpopup');
    if (showreq) {
      showreq.style.display = "block";
    }
  }

  public requestCall() {
    console.log(this.callInfo);
    this.commonService.saveCallRequest(this.callInfo).subscribe(res => {
      alert("Thanks for your request. We will connect soon!");
      this.callInfo = {
        name: '',
        email: '',
        mobile: '',
        service: 'Elderly',
      };
    })
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
