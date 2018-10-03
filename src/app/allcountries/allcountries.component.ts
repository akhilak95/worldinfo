import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Location } from '@angular/common'
import { WorldService } from '../world.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css'],
  providers: [Location]
})
export class AllcountriesComponent implements OnInit {
  public allcountry;
  public region;
  public name: string

  constructor(public http: WorldService, public _activatedroute: ActivatedRoute,
    public route: Router, public toastr: ToastrService, public location: Location) { }

  ngOnInit() {
    this.region = this._activatedroute.snapshot.paramMap.get("region");

    this.allcountry = this.http.getallcountries(this.region).subscribe(
      data => {
        this.allcountry = data;
        this.toastr.success('Success', 'Countries of ' + this.region);
      },
      error => {
        this.toastr.error('Error', 'Something went wrong');
      }
    )
    console.log(this.allcountry);
  }

  public search() {
    let a;
    let countrydata = {
      title: this.name
    }
    let flag: boolean = true;
    for (let country of this.allcountry) {
      if (country.name == this.name) {

        setTimeout(() => {
          this.toastr.success('Success', +this.name + 'found successfully');
          this.route.navigate(['/countryname', country.name]);
        }, 1000)
        a = country;
        flag = false;
      }
    }
    if (flag == true) {
      this.toastr.error('Error', 'Please enter correct info');

    }
    return a;


  }
  public gobacktoprevpage(): any {
    this.location.back();

  }
}
