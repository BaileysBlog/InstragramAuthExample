import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';
import { InstagramService } from '../../../_Services/instagram.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public UI: UIService, public instagram: InstagramService)
  {
    instagram.GetProfile().subscribe(res =>
    {
      console.log(res);
    }, (error) =>
    {
      console.log(error);  
    });
  }

  ngOnInit() {
  }

}
