import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
 selector: 'app-carousel',
 standalone: true,
 imports: [CommonModule, SlickCarouselModule],
 templateUrl: './carousel.component.html',
 styleUrl: ['./carousel.component.css']
})
export class CarouselComponent {

 slides = [
{img: "./assets/fotos.png"},
{img: "./assets/fotos.png"},
{img: "./assets/fotos.png"},
{img: "./assets/fotos.png"},
{img: "./assets/fotos.png"},
{img: "./assets/fotos.png"}
 ];

 slideConfig = {
"slidesToShow":4,
"slidesToScroll":4,
"autoplay": true,
"autoplaySpeed": 5000,
"pauseOnHover": true,
"infinite": true,
"dots":true,
"responsive": [
 {
  "breakpoint":992,
  "settings": {
   "arrows": true,
   "infinite":true,
   "slidesToShow":3,
   "slidesToScroll":3,
   fade: true,
   cssEase: 'linear'
  }
 },
 {
  "breakpoint":768,
  "settings": {
   "arrows": true,
   "infinite":true,
   "slidesToShow":1,
   "slidesToScroll":1,
   fade: true,
   cssEase: 'linear'
  }
 }
]
 };
}
