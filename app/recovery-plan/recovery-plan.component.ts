import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Autoplay, Pagination])

@Component({
  selector: 'app-recovery-plan',
  templateUrl: './recovery-plan.component.html',
  styleUrls: ['./recovery-plan.component.css']
})
export class RecoveryPlanComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  }
  config2: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 8,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  }
  configtesti: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 8,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  }
  configpartner: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  };
  confignews: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  };
  
  public callInfo:any;
  constructor(public commonService: CommonService,) { 
    this.callInfo = {
    name:'',
    email:'',
    mobile:'',
    service:'Pregnancy'
  }
  }

  ngOnInit(): void {
  }
  onSwiper(swiper:any) {
  }
  onSlideChange() {
  }

  public requestCall() {
    console.log(this.callInfo);
    this.commonService.saveCallRequest(this.callInfo).subscribe(res => {
      alert("Thanks for your request. We will connect soon!");
      this.callInfo = {
        name: '',
        email: '',
        mobile: '',
        service: 'Pregnancy',
      };
    })
  }

}


