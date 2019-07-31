import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {UserService} from '../pages/user/user.service'
@Component({
  selector: 'dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent  implements OnInit  {
  ngOnInit(): void {
    this.getCountry();
   }
  user:any = {};

  constructor(protected ref: NbDialogRef<DialogUserComponent>,private service:UserService) {}
   
  cancel() {
    this.ref.close();
  }
  countryList :any;
getCountry(){
  this.service.GetCountry().subscribe(res=>{
    this.countryList = res
  })
}
disabled:boolean = false;
  submit( ) {
      this.disabled = true;
    this.service.AddUser(this.user).subscribe(res=>{
       this.disabled = false;
       this.ref.close(res);

    })
  }

}
