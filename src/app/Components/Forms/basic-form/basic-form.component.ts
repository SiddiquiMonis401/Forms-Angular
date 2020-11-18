import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  doctorObject = [{name:'Jack',fees:1200},{name:'Sparrow',fees:800}];

  constructor(public formBuidler: FormBuilder) { }


  userProfile = this.formBuidler.group({
    doctorName: this.formBuidler.control({
      value: '',
    }),
    doctorFees: this.formBuidler.control({
      value: 0,
      disabled: true,
    }),
  })

  ngOnInit(): void {
  }


  handleSubmitForm() {
    console.log(this.userProfile.value);

  }

  handleDrSelection(e:any){
    let doctorFees = this.doctorObject.find(x => x.name === e.target.value)?.fees;
    this.userProfile.patchValue({
      doctorFees: doctorFees,
    })
  }

  updateForm() {
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
