import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { WorldService } from '../world.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  public language;
  public currentlanguage;
  constructor(public http: WorldService, public _activatedroute: ActivatedRoute, _route: Router, public toastr: ToastrService, public location: Location) { }

  ngOnInit() {
    this.language = this._activatedroute.snapshot.paramMap.get("language");
    console.log(this.language)
    this.currentlanguage = this.http.getlanguagefilter(this.language).subscribe(
      data => {
        this.currentlanguage = data;
        this.toastr.success('Success', 'countries with language ' + this.language);
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


