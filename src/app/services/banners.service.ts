import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor() { }

  getBanners() { 
    return [
        {
            title: "Ubrania dla Ciebie",
            description: "Najlepsze ubrania pod słońcem",
            target: "#",
            image: "./assets/banners/1.jpg"
        },
        {
            title: "Buty",
            description: "Wygodne",
            target: "#",
            image: "./assets/banners/2.jpg"
        },
        {
            title: "Zegarki",
            description: "Najlepsze ubrania pod słońcem",
            target: "#",
            image: "./assets/banners/3.jpg"
        },
        {
            title: "Akcesoria",
            description: "Najlepsze ubrania pod słońcem",
            target: "#",
            image: "./assets/banners/4.jpg"
        }
    ]
  }
  
}


