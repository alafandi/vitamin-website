import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
              //'../../assets/css/bootstrap.min.css',
              '../../assets/css/font-awesome.min.css',
              //'../../assets/css/ie7.css',
              //'../../assets/css/plugins.css',
              '../../assets/css/style.css'
            ]
})
export class HomeComponent implements OnInit {

  testimonialItemCounts: number = 3;
  TestimonialCurrentIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

}
