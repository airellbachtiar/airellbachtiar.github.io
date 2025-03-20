import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit{
  activeSection: string = 'about';

  constructor(private sharedService: SharedService) {}

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 400;
  }

  ngOnInit() {
    this.sharedService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }
}