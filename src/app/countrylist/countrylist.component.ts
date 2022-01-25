import { Component, OnInit } from '@angular/core';
import { Country } from '../Country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  Countries: Country[] = this.cServ.getCountries();
  selectedCountry?: Country;

  constructor(private cServ: CountryService) { }

  ngOnInit(): void {
    console.log(this.Countries);
  }

}
