import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

  constructor(private myservice: MyserviceService ) { }
  Books=[];
  ngOnInit() {
 
    this.myservice.getBooks()
    .subscribe((res : any[])=>{
      console.log(res);
      this.Books = res;

      })
  }

}
