import { Component } from '@angular/core';
import { NbLoginComponent , NbAuthResult} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {
  res: any = {};
  login(): void {
    this.errors = [];
    this.messages = "";
    this.submitted = true;
    this.user.username = this.user.email
    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.res = result['response'];
        this.submitted = false;
       if (this.res.body.data) {
         this.showMessages.error  = false;
         this.showMessages.success  = true;
         let messa = "Successfull"
        this.messages = this.res.body.message;
        sessionStorage.setItem('token',this.res.body.data.token)
      }else{
        this.showMessages.error  = true;
        this.showMessages.success  = false;
        let messa = "Error"

        this.messages = messa;

        this.errors = this.res.body.message;

      }
      const redirect = result.getRedirect();
      if (this.res.body.data) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }
}
