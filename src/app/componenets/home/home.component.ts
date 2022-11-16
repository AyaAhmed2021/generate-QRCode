import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup
  inputValue

  constructor() { }

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    const reg =
      '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$';

    this.form = new FormGroup({
      urlInput: new FormControl(this.inputValue, {
        validators: [
          Validators.required,
          Validators.pattern(reg)
        ],
      }),
    })
  }

  onSubmit(){

    console.log("Hello")
    this.inputValue = this.form.controls.urlInput.value
    console.log( this.inputValue )

  }

}
