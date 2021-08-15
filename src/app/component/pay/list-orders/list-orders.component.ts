import { HelpService } from './../../../services/help.service';
import { SoldService } from './../../../services/sold.service';
import { Sold } from './../../../models/sold';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [NgbPopoverConfig]
})
export class ListOrdersComponent implements OnInit {

  solds: Sold[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;

  constructor(
    public soldService: SoldService,
    public helpService: HelpService,
    config: NgbPopoverConfig
  ) {
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(page?: number) {
    if (!page) { page = 1; }

      this.soldService.getSoldsByUser(page)
        .subscribe(res => {
          this.solds = res['sol'] as Sold[];
          this.pages = res['pages'];
          this.currentPage = res['current'];

          this.beforepage = this.currentPage - 1;
          this.nextpage = this.beforepage + 2;
        });
  }

  seePayment(sold: Sold) {
    this.helpService.getPaymentByYearOrder(sold.order, sold.year);
  }

}
