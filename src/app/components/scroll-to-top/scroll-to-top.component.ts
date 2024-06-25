import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  imports: [NgClass]
})
export class ScrollToTopComponent implements OnInit {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  ngOnInit() {}

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}