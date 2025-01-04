import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  public callInfo: any;
  public careerInfo: any;
  constructor(public commonService: CommonService) {
    this.callInfo = {
      name: '',
      mobile: '',
      message: '',
    };
    this.careerInfo = {
      name: '',
      mobile: '',
      email: '',
      linkedInUrl: '',
    };
  }

  ngOnInit(): void {}

  public submitform() {
    this.commonService.saveCallRequest(this.callInfo).subscribe((res) => {
      alert('Thanks You!');
      this.callInfo = {
        name: '',
        mobile: '',
        message: '',
      };
    });
  }

  // const file:any = document.getElementById("file");
  //   const formData = new FormData();
  //   formData.append("name", this.careerInfo.name);
  //   formData.append("mobile", this.careerInfo.mobile);
  //   formData.append("email", this.careerInfo.linkedInUrl);
  //   formData.append("file", file.files )(by default by javascript)[0]);
  //   this.commonService.saveCallRequest(formData).subscribe(res =>

  public careerSubmit() {
    const file: any = document.getElementById('file');
    const formData = new FormData();
    formData.append('name', this.careerInfo.name);
    formData.append('mobile', this.careerInfo.mobile);
    formData.append('email', this.careerInfo.email);
    formData.append('linkedInUrl', this.careerInfo.linkedInUrl);
    formData.append('file', file.files[0]);
    this.commonService.careerRequest(formData).subscribe((res) => {
      alert('Thanks You!');
      this.careerInfo = {
        name: '',
        mobile: '',
        email: '',
        linkedInUrl: '',
        cvLink: '',
      };
    });
  }
}
