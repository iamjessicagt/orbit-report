import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getAmountOf(parameter: string): number {
    let sum: number = 0;
    
    for (let i: number = 0; i < this.satellites.length; i++){
      if (this.satellites[i].type.toLowerCase() === parameter) {
        sum += 1;
      }
    }
    return sum;
  }
}