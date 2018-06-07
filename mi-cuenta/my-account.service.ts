import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { Order } from './order/order.model';

import { ContactLens } from './contact-lens/contact-lens.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class MyAccountService {

  private drupalApiUrl = '/admin/aui/api/myaccount_dashboard_v1';
  public myAccountPageIsDisplayed: boolean = false;

  constructor( private http: Http ) {}

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  public toggleMyAccountPageDisplay( isOpen ) {
    this.myAccountPageIsDisplayed = isOpen;
  }

  public getRecent() {
    if ( environment.production ){
      return this.http
        .get( this.drupalApiUrl )
        .map( res => res.json() )
          .catch( this.handleError );
    }
    else{
     return Observable.of(environment.recentCardObjectResponse).map( (res) => res );
    }
  }
}