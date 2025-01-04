import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-virtual-physiotherapy-plan',
  templateUrl: './virtual-physiotherapy-plan.component.html',
  styleUrls: ['./virtual-physiotherapy-plan.component.css']
})
export class VirtualPhysiotherapyPlanComponent implements OnInit {
public callInfo:any;
  constructor(public commonService:CommonService) { 
    this.callInfo = {
      name: '',
      email: '',
      mobile: '',
      service: 'Elderly',
    };
  }
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

}
