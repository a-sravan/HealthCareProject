import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Pagination } from 'swiper';
import { CommonService } from '../service/common.service';
SwiperCore.use([Navigation, Autoplay, Pagination])

@Component({
  selector: 'app-home-care',
  templateUrl: './physiotheraphy.component.html',
  styleUrls: ['./physiotheraphy.component.css']
})
export class PhysiotheraphyComponent implements OnInit {
  public callInfo:any;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
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
  }
  confignews: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:1000 },
  }
  constructor( public commonService:CommonService) {
    this.callInfo = {
      name:'',
      email:'',
      mobile:'',
      service:'Elderly',
    }
   }

  ngOnInit(): void {
  }
  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  public requestCall (){
    this.commonService.saveCallRequest(this.callInfo).subscribe (res => {
      alert("Thanks for your request. We will connect soon!");
      this.callInfo = {
        name: '',
        email:'',
        mobile:'',
        service:'',
      }
    })
  }

  public showRequestcall() {
    const showreq = document.getElementById('showcallpopup');
    if (showreq) {
      showreq.style.display = 'block';
    }
  }

  public closeCallReq() {
    const closecallreq = document.getElementById('showcallpopup');
    if (closecallreq) {
      closecallreq.style.display = 'none';
    }
  }

}

