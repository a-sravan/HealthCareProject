import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Autoplay,
  Pagination,
} from 'swiper';
SwiperCore.use([Navigation, Autoplay, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,) {
  }
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

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Splide('.splide', {
        type: "loop",
        perPage: 1,
        arrows: false,
        autoplay: true
      }).mount();
    }



  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }


}


