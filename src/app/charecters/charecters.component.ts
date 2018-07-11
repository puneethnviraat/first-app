import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-charecters',
  templateUrl: './charecters.component.html',
  styleUrls: ['./charecters.component.css']
})
export class CharectersComponent {

  constructor(private myservice: MyserviceService ) { }
  Charecters=[];
  ngOnInit() {
       this.myservice.getCharecters()
    .subscribe((resss : any[])=>{
      console.log(resss);
      this.Charecters = resss;

      })
  }
}
