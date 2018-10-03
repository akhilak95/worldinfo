import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public baseURL = "https://restcountries.eu/rest/v2/";
  public region = [
    { "name": "asia", "img": "assets/asia.png" },
    { "name": "americas", "img": "assets/northamerica.png" },
    { "name": "europe", "img": "assets/southamerica.png" },
    { "name": "africa", "img": "assets/africa.png" },
    { "name": "oceania", "img": "assets/oceania.png" },

  ]
  constructor(public http: HttpClient) { }


  public getallregion() {
    return this.region;

  }

  public getallcountries(region) {
    let myresponse = this.http.get(this.baseURL + 'region/' + region + '?fields=name;capital;currencies;flag;languages;currencies;subregion;timezones', region);
    console.log(myresponse);
    return myresponse;

  }

  public getsinglecountry(countryname) {
    let myresponse = this.http.get(this.baseURL + 'name/' + countryname + '?fullText=true', countryname);

    console.log(myresponse);
    return myresponse;
  }
  public getcurrencyfilter(currencies) {
    let myresponse = this.http.get(this.baseURL + 'currency/' + currencies, currencies);

    console.log(myresponse);
    return myresponse;
  }
  public getlanguagefilter(language) {
    let myresponse = this.http.get(this.baseURL + 'lang/' + language, language);

    console.log(myresponse);
    return myresponse;
  }
}
