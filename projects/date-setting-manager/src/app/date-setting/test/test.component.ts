import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public get activeDate() {
    try {
      return new Date();
    } catch (e) {
      return null;
    }
  }


  public get today() {
    return new Date();
  }

}
