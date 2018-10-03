import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { WorldService } from '../world.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [Location]
})
export class CurrencyComponent implements OnInit {
  public currency;
  public currentcurrency;
  constructor(public http: WorldService, public _activatedroute: ActivatedRoute, _route: Router, public toastr: ToastrService, public location: Location) { }

  ngOnInit() {
    this.currency = this._activatedroute.snapshot.paramMap.get("currencies");

    this.currentcurrency = this.http.getcurrencyfilter(this.currency).subscribe(
      data => {
        this.toastr.success('Success', 'countries with currency ' + this.currency);
        this.currentcurrency = data;
        console.log(data)
      },
      error => {
        this.toastr.error('Error', 'Something went wrong');
      }
    )

  }
  public gobacktoprevpage(): any {
    this.location.back();

  }
}


