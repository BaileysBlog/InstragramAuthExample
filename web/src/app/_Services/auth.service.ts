import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  _IsAuthenticated: boolean;

  _InstagramAccessToken: string;



  constructor() { }

  public IsAuthenticated(): boolean
  { 
    return this._IsAuthenticated;
  }

  public Logout(): void
  { 
    if (this.IsAuthenticated())
    { 
      this._IsAuthenticated = false;
      this.SetInstagramAccessToken(null);
    }  
  }

  public Login(username: string, password: string): void
  { 
    this._IsAuthenticated = true;
  }

  public SetInstagramAccessToken(token: string): void
  { 
    this._InstagramAccessToken = token;
    if (token)
    { 
      this._IsAuthenticated = true;
    }  
  }

}
