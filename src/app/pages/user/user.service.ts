import { Injectable ,EventEmitter} from '@angular/core';
 
import { HttpClient  } from '@angular/common/http';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs';
@Injectable( )
export class UserService {
  firstHeaders: any;
   
  USER_ADD = 'api/user/register';
  USER_GET = 'api/user';
  DEVICE_ADD = 'api/device';
  COUNTRY_LIST = 'https://restcountries.eu/rest/v2/all'
  constructor(private _http: HttpClient, private router: Router
    // tslint:disable-next-line: no-shadowed-variable
         ) {
    // tslint:disable-next-line: deprecation
          this.firstHeaders = new Headers();
          this.firstHeaders.append('Content-Type', 'application/json');
      }
      AddDevice(data:any): Observable<any> {
        return this._http.post(   this.DEVICE_ADD  , data )
       .map(res => res as any)
       .catch(this.handleError);
      }
      AddUser(data): Observable<any> {
         return this._http.post(   this.USER_ADD  , data )
        .map(res => res as any)
        .catch(this.handleError);
       }
       GetUser( page,size): Observable<any> {
        return this._http.post(   this.USER_GET  +'/'+page+'/'+size,{}  )
       .map(res => res as any)
       .catch(this.handleError);
      }
       GetCountry(): Observable<any> {
        return this._http.get(   this.COUNTRY_LIST )
        .map(res => res as any)
        .catch(this.handleError);
       }
       private handleError(error: Response) {
        console.log(error);
 
        return Observable.throw(error);
      }
}
