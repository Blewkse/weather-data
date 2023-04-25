import { Injectable } from '@angular/core';
import * as L from "leaflet";

@Injectable({
  providedIn: 'root'
})
export class GrahamSortService {

  constructor() { }

  grahamScan(points: Array<[lat: number, long: number]>): Array<[lat: number, long: number]>{
    let pivot = points[0];
    points.forEach((singlePoint, index, array) => {
      if(singlePoint[0] < pivot[0] || singlePoint[0] == pivot[0] && singlePoint[1] < pivot[1]){
        pivot = singlePoint;
      }
    });
    console.log(pivot);
    points.sort((a, b) => {
      let angleA = Math.atan2(a[1] - pivot[1], a[0] - pivot[0]);
      let angleB = Math.atan2(b[1] - pivot[1], b[0] - pivot[0]);
      if (angleA < angleB) {
        return -1;
      } else if (angleA > angleB) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(points[0])
    let stack: Array<[lat: number, long: number]> = [];
    stack.push(points[0]);
    stack.push(points[1]);
    for (let i = 2; i < points.length; i++) {
      let top = stack.pop();
      while (top && stack.length >=2 && !this.isLeftTurn(top, stack[stack.length - 1], points[i])) {
        top = stack.pop();
      }
      if(top){
        stack.push(top);
      }
      stack.push(points[i]);
    }
    stack.push(pivot);
    return stack;
  }

  isLeftTurn(p1: [lat: number, long: number], p2: [lat: number, long: number], p3: [lat: number, long: number]) : boolean {
    let crossProduct = (p2[1] - p1[1]) * (p3[0] - p2[0]) - (p2[0] - p1[0]) * (p3[1] - p2[1]);
    return crossProduct > 0;
  }
}
