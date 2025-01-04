import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
public callInfo:any;
  constructor( public commonService: CommonService) {
    this.callInfo = {
      name: '',
      mobile: '',
      email: '',
      service: 'Pregnancy',
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

  public requestCall()   {
    this.commonService.saveCallRequest(this.callInfo).subscribe(res => {
      alert("we will connect Soon");
      this.callInfo = {
        name: '',
        email:'',
        mobile:'',
        service:'',
      }
    })
  }
  

}
