import { Injectable } from '@angular/core';
import { Country } from './Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  selectedCountry: any;
  Countries: Country[] = [
    {
        id: 1,
        name: 'USA',
        language: 'English',
        colors: ['white', 'red', 'blue'] ,
        flagUrl: "assets/usa.png"
    },
    {
        id: 2,
        name: 'Algeria',
        language: 'Arabic and Berber',
        colors: ['blue', 'yellow','red'],
        flagUrl: "assets/algeria.png"
    },
    {
        id: 3,
        name: 'Mexico',
        language: 'Spanish',
        colors: ['white', 'red', 'green'],
        flagUrl: "assets/mexico.png"
    },
    {
        id: 4,
        name: 'Sweden',
        language: 'Swedish',
        colors: ['#FFec00', '#006aa7'],
        flagUrl: "assets/swedan.png"
    },
    {
      id: 5,
      name: 'Australia',
      language: 'English',
      colors: ['#012169', 'white', '#E4002B'],
      flagUrl: "assets/australia.png"
  }
];
  constructor() { }

  getCountries(): Country[]
  {
      return this.Countries;
  }
  

  getById(id: number): number {
      for(let i=0; i < this.Countries.length; i++){
          if(this.Countries[i].id === id){
              return i;
          }
      }
      return -1;
  }
}

