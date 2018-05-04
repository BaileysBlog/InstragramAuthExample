import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/throw';
import { UserSelfResponse } from '../Models/Instragram Responses/user.self.model';

@Injectable()
export class InstagramService {


  InstagramApi: string = "https://api.instagram.com/v1";


  constructor(private web: Http,private auth: AuthService)
  {
    
  }



  public GetProfile(): Observable<UserSelfResponse>
  { 

    if (this.auth.IsAuthenticated())
    {
      var url = this.GetAuthHeader(`${this.InstagramApi}/users/self/`);
      console.log(url);
      return this.web.get(url).map(data =>
      {
        return data.json()["data"] as UserSelfResponse;
      });
    } else
    { 
      return this.ThrowAuthError();
    }
  }

  private GetAuthHeader(url: string): string
  { 
    return `${url}?access_token=${this.auth._InstagramAccessToken}`;
  }


  private ThrowAuthError(): Observable<any>
  { 
    return Observable.throw(new Error("User not authenticated"));
  }

}
