import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BooksService {
    constructor(private http: Http) { }
   
    getBooks() {
       return this.http.get("https://anapioficeandfire.com/api/books")
          .map((response) => response.json())
          };
      }
