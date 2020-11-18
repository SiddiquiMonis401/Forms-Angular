import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  address: FormGroup = new FormGroup({
    state: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
  })

  userProfile:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
    address: this.address, 
    hobbies: new FormArray([
      new FormControl(''),
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  //Getter for the array control of the form
  get hobbies(){
    return this.userProfile.get('hobbies') as FormArray;
  }

  //Adding new hobbies
  addHobby(){
    this.hobbies.push(new FormControl(''));
  }


  handleSubmitForm(){
    console.log(this.userProfile.value);
    
  }

  updateForm(){
    this.userProfile.patchValue({
      firstName: 'Monis',
      email: 'monisms15@gmail.com',
      address: {
        state: 'USA',
        city: 'California',
        street: '123',
      }
    })
  }

}
