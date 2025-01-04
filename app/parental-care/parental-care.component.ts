import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Pagination } from 'swiper';
// import { request } from 'https';
SwiperCore.use([Navigation, Autoplay, Pagination])

@Component({
  selector: 'app-parental-care',
  templateUrl: './parental-care.component.html',
  styleUrls: ['./parental-care.component.css']
})
export class ParentalCareComponent implements OnInit {
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
  confignews: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:2000 },
  }

  configpartner: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:2000 },
  }

  configgallery: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled:true
    },
    
    slidesPerGroupAuto:true,
    pagination: { clickable: true },
    autoplay: { delay:2000 },
  }

  public callInfo:any;
  constructor(private router: Router, public commonService: CommonService,) { 
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
    console.log(swiper);
  }
  onSlideChange() {
  }

  public change_route(route: string): void {
    this.router.navigate([route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
