import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inBox = 0;
  inMem = 0;
  oprImg = "";
  opr = "";
  http: HttpClient;
  operations: string[];
  baseUrl = environment.apiUrl;

  constructor(http: HttpClient) {
    this.http = http;
    console.log(this.baseUrl);
    this.http.get<string[]>(this.baseUrl + 'ICalculator').subscribe(result => {
      this.operations = result;
    }, error => console.error(error));
  }

  numButton(number) {
    this.inBox = this.inBox * 10 + number;
  }
  oprButton(operation) {
    if (this.inMem == 0) {
      this.inMem = this.inBox;
      this.inBox = 0;
    }
    this.opr = operation;
    if (operation == "div") {
      this.oprImg = " / ";
    } else if (operation == "add") {
      this.oprImg = " + ";
    } else if (operation == 'mul') {
      this.oprImg = " * ";
    } else if (operation == 'sub') {
      this.oprImg = " - ";
    } else if (operation == 'sqrt') {
      this.oprImg = " ^ ";
      this.inBox = 0.5; 
    }
  }
  clear() {
    if (this.inBox == 0) {
      this.inMem = 0;
      this.oprImg = "";
      this.opr = "";
    } else {
      this.inBox = 0;
    }
  }
  equals() {
    this.http.get<number>(this.baseUrl + 'ICalculator' + '/' + this.opr + '/' + this.inMem + '/' + this.inBox).subscribe(
      result => {
        this.inMem = result;
      },
      error => {
        console.error(error);
        this.clear();
        this.oprImg = "ERROR ";
      }
    );
  }
}
