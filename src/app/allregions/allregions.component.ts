import { Component, OnInit } from '@angular/core';
import { WorldService } from '../world.service';

@Component({
  selector: 'app-allregions',
  templateUrl: './allregions.component.html',
  styleUrls: ['./allregions.component.css']
})
export class AllregionsComponent implements OnInit {
  public allregions;
  constructor(public http: WorldService) { }

  ngOnInit() {
    this.allregions = this.http.getallregion();
    console.log(this.allregions)
  }

}
