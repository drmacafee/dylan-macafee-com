import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitSuccess = 'submit';
  submitSuccessClass = 'btn btn-primary';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitButton() {
    this.submitSuccess = 'success!'
    this.submitSuccessClass = 'btn btn-success'
  }

}
