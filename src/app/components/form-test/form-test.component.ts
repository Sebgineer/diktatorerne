import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {


  constructor(private fb: FormBuilder) {  }

  group = this.fb.group({
    name: ['name', Validators.required],
    birthdate: ['', Validators.required]
  });
  ngOnInit(): void {
    console.log(this.group);

  }

}
