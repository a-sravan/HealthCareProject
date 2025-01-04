import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Pagination } from 'swiper';
// import { CommonOptions } from 'child_process';
SwiperCore.use([Navigation, Autoplay, Pagination])

@Component({
  selector: 'app-continuum-care',
  templateUrl: './continuum-care.component.html',
  styleUrls: ['./continuum-care.component.css']
})
export class ContinuumCareComponent implements OnInit {
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
  public contactInfo:any;

  constructor(private router: Router, private commonService:CommonService,) { 
    this.contactInfo = {
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
    console.log('slide change');
  }

  public change_route(route: string): void {
    this.router.navigate([route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public requestCall(){
    console.log(this.contactInfo);
    this.commonService.saveCallRequest(this.contactInfo).subscribe(res => {
      alert("Thanks for your request. We will connect soon!");
      this.contactInfo = {
        name: '',
        email: '',
        mobile: '',
        service: 'Pregnancy',
      };
    })
  }

}
