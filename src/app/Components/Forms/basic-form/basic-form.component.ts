import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  errorMessage:any = {
    required: (field:string) => {
      return `${field} is required!`
    },
    minLength: (field:string, limit:number) => {
      return `${field} should be minimum ${limit} characters long!`
    },
    maxLength: (field:string, limit:number) => {
      return `${field} should not be more than ${limit} characters long!`
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  handleSubmitForm(f:any){
    if(f.invalid){
      alert("Invalid Data enetered!");
      return;
    }
    console.log("values are ", f.value);
  }

}
