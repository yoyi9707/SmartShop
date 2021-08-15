import { Router } from '@angular/router';
import { NomenclatorService } from './../../../services/nomenclator.service';
import { Nomenclator } from 'src/app/models/nomenclator';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-nomenclators',
  templateUrl: './list-nomenclators.component.html',
  styleUrls: ['./list-nomenclators.component.css'],
  providers: [NgbPopoverConfig]
})
export class ListNomenclatorsComponent implements OnInit {

  nomenclators: Nomenclator[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;

  constructor(public nomenclatorService: NomenclatorService, public route: Router) { }

  ngOnInit(): void {
    this.getNomenclators();
  }

  getNomenclators(page?: number) {
    if (!page) { page = 1; }
    this.nomenclatorService.getNomenclatorsPaginated(page)
      .subscribe(res => {
        this.nomenclators = res['nomenclator'] as Nomenclator[];
        this.pages = res['pages'];
        this.currentPage = res['current'];

        this.beforepage = this.currentPage - 1;
        this.nextpage = this.beforepage + 2;
      });
  }

  edit(item: Nomenclator) {
    console.log(item);
    this.nomenclatorService.selectedNomenclator = item;
    this.route.navigate(['/nomenclator/create']);
  }

  activarNom(nomenclator: Nomenclator) {
    nomenclator.active = true;
    this.nomenclatorService.updateNomenclator(nomenclator)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  desactivarNom(nomenclator: Nomenclator) {
    nomenclator.active = false;
    this.nomenclatorService.updateNomenclator(nomenclator)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  deleteNom(id: string) {
    console.log(id)
    this.nomenclatorService.deleteNomenclator(id)
      .subscribe(
        res => {
          console.log(res);
          this.getNomenclators(this.currentPage);
        },
        err => console.log(err)
      )
  }

}
