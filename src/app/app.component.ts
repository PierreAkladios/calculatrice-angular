import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Calculatrice";
  first = 0;
  second = 0;
  result = 0;
  constructor() {}

  add(first: number, second: number): any {
    this.first = first;
    this.second = second;
    this.result = this.first + this.second;
  }

  substract(first: number, second: number): any {
    this.first = first;
    this.second = second;
    this.result = this.first - this.second;
  }

  multiply(first: number, second: number): any {
    this.first = first;
    this.second = second;
    this.result = this.first * this.second;
  }

  divide(first: number, second: number): any {
    this.first = first;
    this.second = second;
    this.result = this.first / this.second;
  }
}
