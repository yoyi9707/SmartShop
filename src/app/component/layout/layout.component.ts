import { HelpService } from './../../services/help.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public helpService: HelpService) { }

  ngOnInit(): void {
  }

}
