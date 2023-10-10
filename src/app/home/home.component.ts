import { Component, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../stackcarousel/stackcarousel.interface';
import { StackcarouselComponent } from '../stackcarousel/stackcarousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Slide[] = [
    { src: '/assets/image-1.jpeg', headline: 'Web' },
    { src: '/assets/image-2.jpeg', headline: '.NET' },
    { src: '/assets/image-3.jpeg', headline: 'SQL Server' },
    { src: '/assets/image-4.jpeg', headline: '' },
    { src: '/assets/image-5.jpeg', headline: '' },
  ];

  constructor() { }

  ngOnInit(): void {
    }

}
