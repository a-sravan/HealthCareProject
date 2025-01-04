import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-pregnancy-paln-third',
  templateUrl: './pregnancy-paln-third.component.html',
  styleUrls: ['./pregnancy-paln-third.component.css']
})
export class PregnancyPalnThirdComponent implements OnInit {
  public callInfo: any;
  constructor(private commonService: CommonService) { 
    this.callInfo = {
      name: '',
      mobile:'',
      email:'',
      service:'Pregnancy'
    };
  }
  

  ngOnInit(): void {
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

  public requestCall(){
    this.commonService.saveCallRequest(this.callInfo).subscribe(res => {
      alert("Thanks for your request. We will connect soon!");
      this.callInfo = {
        name: '',
        mobile: '',
        email: '',
        service: 'Pregnancy',
      };
    });
  }

}
