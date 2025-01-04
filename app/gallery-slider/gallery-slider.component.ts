import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.css']
})
export class GallerySliderComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Splide( '.splide',{
        type:"loop",
        perPage:4,
        autoplay:true,
        arrows:true,
        pagination:false,
      }).mount();
    }
  }

}
