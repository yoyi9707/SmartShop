import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HelpService } from './../../../services/help.service';
import { NomenclatorService } from './../../../services/nomenclator.service';
import { Component, OnInit } from '@angular/core';
import { Nomenclator } from 'src/app/models/nomenclator';

@Component({
  selector: 'app-create-nomenclator',
  templateUrl: './create-nomenclator.component.html',
  styleUrls: ['./create-nomenclator.component.css']
})
export class CreateNomenclatorComponent implements OnInit {

  error: string;
  nomenclators: Nomenclator[];
  idfather: string;
  orderfather: number;

  constructor(
    public nomenclatorService: NomenclatorService,
    public helpService: HelpService,
    public route: Router) { }

  ngOnInit(): void {
    this.getNom();
  }

  Add(form: NgForm) {

    form.value.active = true;

    if (form.value._id) {
      if (!this.idfather) {
        for (let index = 0; index < this.nomenclators.length; index++) {
          const element = this.nomenclators[index];
          if (element._id == this.nomenclatorService.selectedNomenclator.fatherid) {
            form.value.fatherid = element._id;
            form.value.order = element.order + 1;
            index = this.nomenclators.length;
          }
        }
      } else {
        form.value.fatherid = this.idfather;
        form.value.order = this.orderfather + 1;
      }

      this.nomenclatorService.updateNomenclator(form.value)
        .subscribe(
          res => {
            this.nomenclatorService.selectedNomenclator = new Nomenclator();
            this.helpService.showNotif('Se Guardaron los Cambios.');
            this.route.navigate(['/nomenclator/list']);
          },
          err => this.error = err
        )

    } else {
      form.value.fatherid = this.idfather;
      form.value.order = this.orderfather + 1;

      this.nomenclatorService.postNomenclator(form.value)
        .subscribe(
          res => {
            this.nomenclatorService.selectedNomenclator = new Nomenclator();
            this.helpService.showNotif('Nomenclador Guardado. Puede crear nuevos nomencladores.');
          },
          err => this.error = err[0]
        )
    }
  }

  getNom() {
    this.nomenclatorService.getNomenclators()
      .subscribe(
        res => {
          this.nomenclators = res as Nomenclator[]
        },
        err => {
          console.log(err)
        }
      );
  };

  saveFather(id: string, order: number) {
    this.idfather = id;
    this.orderfather = order;
  }

}
