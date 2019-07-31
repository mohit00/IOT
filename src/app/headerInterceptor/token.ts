import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse,HttpHeaders }
  from '@angular/common/http';
 import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class Token implements HttpInterceptor {
    constructor( ) {

    }

  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      console.log(req.url)
      const authReq = req.clone({
        setHeaders: {
          Authorization: `lakhan ${sessionStorage.getItem("token")}`
        }
      });
      
      return next.handle(authReq).do(evt => {

      if (evt instanceof HttpResponse) {
        console.log('end');
     

        console.log('---> status:', evt.status);
       }
    });

  }
}
