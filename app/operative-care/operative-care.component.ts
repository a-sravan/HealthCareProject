import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ModalServiceEvent } from '../common/modal.service';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Autoplay,
  Pagination,
} from 'swiper';
SwiperCore.use([Navigation, Autoplay, Pagination]);

@Component({
  selector: 'app-operative-care',
  templateUrl: './operative-care.component.html',
  styleUrls: ['./operative-care.component.css'],
})
export class OperativeCareComponent implements OnInit {
  public tabId: number = 1;
  public showEvent: boolean;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },

    slidesPerGroupAuto: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  configtabslider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },

    slidesPerGroupAuto: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  confignews: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },

    slidesPerGroupAuto: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  configpartner: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },

    slidesPerGroupAuto: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  configgallery: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },

    slidesPerGroupAuto: true,
    pagination: { clickable: true },
    autoplay: { delay: 2000 },
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalEventService: ModalServiceEvent,
    private router: Router, 
  ) {
    this.showEvent = false;
  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }

  public toggleEvent() {
    this.showEvent = !this.showEvent;
  }

  public change_route(route: string): void {
    this.router.navigate([route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public tabslider(tab: number) {
    this.tabId = tab;
  }

  public openEnquiry(): void {
    this.modalEventService.openModalEvent();
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

  public showRequestcallbd1() {
    const showreq = document.getElementById('showcallpopup1');
    if (showreq) {
      showreq.style.display = "block";
    }
  }

   public closeCallReq1() {
     const closecallreq = document.getElementById('showcallpopup1');
     if (closecallreq) {
       closecallreq.style.display = "none";
     }
   }

  public showRequestcallbd2() {
    const showreq = document.getElementById('showcallpopup2');
    if (showreq) {
      showreq.style.display = "block";
    }
  }

  public closeCallReq2() {
    const closecallreq = document.getElementById('showcallpopup2');
    if (closecallreq) {
      closecallreq.style.display = "none";
    }
  }

  public showRequestcallbd3() {
    const showreq = document.getElementById('showcallpopup3');
    if (showreq) {
      showreq.style.display = "block";
    }
  }

  public closeCallReq3() {
    const closecallreq = document.getElementById('showcallpopup3');
    if (closecallreq) {
      closecallreq.style.display = "none";
    }
  }

}
