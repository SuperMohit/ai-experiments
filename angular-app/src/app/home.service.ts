import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface HomeListing {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homes: HomeListing[] = [
    {
      id: 1,
      title: 'Beautiful Family House',
      description: 'A beautiful family house with a spacious garden.',
      price: 350000,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Modern Glass Villa',
      description: 'A modern villa with stunning sea views.',
      price: 1500000,
      imageUrl: 'https://via.placeholder.com/300'
    },
    // More mock data...
  ];

  constructor() { }

  getHomeListings(): Observable<HomeListing[]> {
    return of(this.homes);
  }
}
