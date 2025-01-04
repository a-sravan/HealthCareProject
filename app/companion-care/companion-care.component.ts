import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-companion-care',
  templateUrl: './companion-care.component.html',
  styleUrls: ['./companion-care.component.css']
})
export class CompanionCareComponent implements OnInit {


  public callInfo: any ;
  constructor( private commonService: CommonService) {
    this.callInfo = {
      name:'',
      email:'',
      mobile:'',
      service:'Elderly'
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

}
