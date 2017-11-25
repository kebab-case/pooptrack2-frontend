// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';


// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html'
// })
// export class LoginPage {
//   // this tells the tabs component which Pages
//   // should be each tab's root Page
//   constructor(public navCtrl: NavController) {
//   }
//   goToHome(params){
//     if (!params) params = {};
//     this.navCtrl.push(HomePage);
//   }
// }

import {OnInit, Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import { DataService } from "../../app/data.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  userInfo: {name: string} = {name: ''};

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private dataService: DataService) {
  }
  goToHome(params){
      if (params == "anon")
        this.dataService.setAnon();  
        this.navCtrl.push(TabsPage);
  
      /* if (!params) params = {};
         this.navCtrl.push(TabsPage); */

  }

  ngOnInit(): any {
    this.myForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3), this.nameValidator.bind(this)]],
    });
  }

  onSubmit() {
    console.log('submitting form');
  }

  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }

  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return {invalidName: true};
    }
  }
}