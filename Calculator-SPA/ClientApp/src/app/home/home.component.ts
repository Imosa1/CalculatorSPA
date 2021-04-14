import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

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
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.http.get<string[]>('https://localhost:44389/api/ICalculator').subscribe(result => {
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
    } else if (operation == '*') {
      this.oprImg = " * ";
    } else if (operation == '-') {
      this.oprImg = " - ";
    } else if (operation == 'sqrt') {
      this.oprImg = " sqrt ";
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
    this.http.get<number>('https://localhost:44389/api/ICalculator' + '/' + this.opr + '/' + this.inMem + '/' + this.inBox).subscribe(
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
