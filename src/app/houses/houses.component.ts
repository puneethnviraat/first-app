import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private myservice: MyserviceService ) { }
  Houses=[];
  ngOnInit() {
    this.myservice.getHouses()
    .subscribe((res : any[])=>{
      console.log(res);
      this.Houses = res;

      })
  }

}
