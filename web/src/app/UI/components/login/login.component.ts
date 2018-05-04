import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackBarService } from '../../../_Services/snack-bar.service';
import { AuthService } from '../../../_Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public LoginForm: FormGroup;
  public Loading: boolean;

  constructor(public UI:UIService, private toast: SnackBarService, private auth: AuthService) 
  {

  }

  private ResetForm(): void
  {
    this.LoginForm.enable();
    this.LoginForm.reset();
  }

  private initForm(): void
  {
    this.LoginForm = new FormGroup({
      Email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      Password: new FormControl(null, Validators.required)
    });
  }

  public Login(data?:any): void
  { 
    
  }

  public InstagramLogin():void
  {
    //https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=http://localhost:4200/login/instagram&response_type=token
    window.open(this.GetInstagramAuth(), "_self", null, null);
  }

  private GetInstagramAuth(): string
  { 
    const client_id: string = "90102be692364d3f95f3cea51e510e1a";
    let redirect_uri = "http://localhost:4200/";
    return `https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirect_uri}login/instagram&response_type=token`;
  }


  ngOnInit() 
  {
    this.UI.SetIncludeSideNav(false);
    this.initForm();
    this.LoginForm.disable();
  }
  ngOnDestroy()
  { 
    this.UI.SetIncludeSideNav(true);
  }


}
