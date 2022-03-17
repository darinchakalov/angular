import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements AfterViewInit {
  @ViewChild('form') form!: NgForm;

  codes!: string[];
  ngCodes!: string;
  buildings!: string[];
  ngBuldings!: string;

  img = '';

  ngAfterViewInit(): void {
    this.codes = ['+359', '+555'];
    this.ngCodes = this.codes[0];
    this.buildings = ['Designer', 'Coder'];
    this.ngBuldings = this.buildings[0];
  }

  submitHandler() {
    console.log(this.form.value);
  }
}
