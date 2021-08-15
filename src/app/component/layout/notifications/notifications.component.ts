import { HelpService } from './../../../services/help.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor( public helpService: HelpService) { }

  ngOnInit(): void {
  }


close(){
  this.helpService.closeNotif();
}



}
