import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { WorldService } from '../world.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css'],
  providers: [Location]
})
export class SinglecountryComponent implements OnInit {
  public country;
  public currentcountryinfo;
  constructor(public http: WorldService, public _activatedroute: ActivatedRoute, _route: Router, public location: Location, public toastr: ToastrService) { }

  ngOnInit() {
    this.country = this._activatedroute.snapshot.paramMap.get("countryname");

    this.currentcountryinfo = this.http.getsinglecountry(this.country).subscribe(
      data => {
        this.toastr.success('Success', ' Info of ' + this.country);
        this.currentcountryinfo = data;
        for (let d in this.currentcountryinfo) {

          if (this.currentcountryinfo[d].borders == '') {
            this.currentcountryinfo[d].borders = ' none';
          }
          if (this.currentcountryinfo[d].gini == '') {
            this.currentcountryinfo[d].gini = ' none';
          }
        }
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


