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

  constructor(private UI:UIService, private toast: SnackBarService, private auth: AuthService) 
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
