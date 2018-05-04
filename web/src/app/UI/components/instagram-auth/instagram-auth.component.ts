import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../_Services/auth.service';

@Component({
  selector: 'app-instagram-auth',
  templateUrl: './instagram-auth.component.html',
  styleUrls: ['./instagram-auth.component.css']
})
export class InstagramAuthComponent implements OnInit {

  Token: string;

  constructor(private nav:Router, private auth: AuthService)
  {
    this.Token = window.location.hash.replace("#", '').replace("access_token=", '');
    if (this.Token)
    { 
      auth.SetInstagramAccessToken(this.Token);
      nav.navigate(['/']);
    }  
   }

  ngOnInit() {
  }

}
