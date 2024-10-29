import { Component, OnInit } from '@angular/core';
import { HomeService, HomeListing } from '../home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class HomeComponent implements OnInit {

  public homeListings: HomeListing[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeListings().subscribe(data => {
      this.homeListings = data;
    });
  }

}