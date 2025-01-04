import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
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
  selector: 'app-bls-training',
  templateUrl: './bls-training.component.html',
  styleUrls: ['./bls-training.component.css'],
})
export class BlsTrainingComponent implements OnInit {
  public tabId: number = 1;
  public showEvent: boolean;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },
    slidesPerGroupAuto: true,
    pagination: { clickable: false },
    autoplay: { delay: 2000 },
  };

  configtabslider: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      enabled: true,
    },
    slidesPerGroupAuto: true,
    pagination: { clickable: false },
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
    private router: Router,
    private modalEventService: ModalServiceEvent
  ) {
    this.showEvent = false;
  }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   new Splide( '.splide',{
    //     type:"loop",
    //     perPage:4,
    //     autoplay:true,
    //     arrows:true,
    //     pagination:false,
    //   }).mount();
    // }
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  public toggleEvent() {
    this.showEvent = !this.showEvent;
  }

  public tabslider(tab: number) {
    this.tabId = tab;
  }

  public openEnquiry(): void {
    this.modalEventService.openModalEvent();
  }

  public change_route(route: string): void {
    this.router.navigate([route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
