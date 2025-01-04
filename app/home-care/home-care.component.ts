import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Pagination } from 'swiper';
import { CommonService } from '../service/common.service';

SwiperCore.use([Navigation, Autoplay, Pagination])

@Component({
  selector: 'app-home-care',
  templateUrl: './home-care.component.html',
  styleUrls: ['./home-care.component.css']
})
export class HomeCareComponent implements OnInit {
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
  public callInfo:any;
  constructor(private router:Router, private commonService:CommonService) {
    this.callInfo = {
      name:'',
      email:'',
      mobile:'',
      service:'Elderly',
    }
   }

  ngOnInit(): void {
  }

  public change_route(route:string):void{
    this.router.navigate([route]);
    window.scrollTo({top: 0, behavior: 'smooth'});

  }
  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
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

