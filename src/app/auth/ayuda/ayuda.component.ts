import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  @Input() errors: any;
  @Input() tipocampo: string;

  constructor() { }

  ngOnInit(): void {

  }


}
