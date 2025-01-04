import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-pregnancy-paln-second',
  templateUrl: './pregnancy-paln-second.component.html',
  styleUrls: ['./pregnancy-paln-second.component.css']
})
export class PregnancyPalnSecondComponent implements OnInit {
public callInfo: any;
  constructor(private commonService: CommonService) { 
    this.callInfo ={
      name:'',
      mobile:'',
      email:'',
      service: 'Pregnancy'
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
    console.log(this.callInfo);
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
