import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { BooksComponent } from './books/books.component';
import { CharectersComponent } from './charecters/charecters.component';
import { HousesComponent } from './houses/houses.component';

@NgModule({
   declarations: [
      AppComponent,
      BooksComponent,
      CharectersComponent,
      HousesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpModule
   ],
   providers: [MyserviceService],
   bootstrap: [AppComponent]
})
export class AppModule { }