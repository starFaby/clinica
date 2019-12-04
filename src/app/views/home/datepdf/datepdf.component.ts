import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { GeneralService } from 'src/app/services/general.service';
import { General } from 'src/app/models/general';
import { MatTableDataSource } from '@angular/material';
// import 'jspdf-autotable';

@Component({
  selector: 'app-datepdf',
  templateUrl: './datepdf.component.html',
  styleUrls: ['./datepdf.component.css']
})
export class DatepdfComponent implements OnInit {
  //  @ViewChild('pdfDatos', { static: false}) pdfDatos1: ElementRef;
  constructor(private generalService: GeneralService) { }
  arreglo;
  ngOnInit() {
    this.getGeneral();
  }
  getGeneral() {
    this.generalService.getGenerals().snapshotChanges().subscribe(
      list => {
        this.arreglo = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  showPdf() {
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById('pdfDatos'), 10, 10, { width: 190 });
    doc.save('datos exesivos');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arreglo.length; i++) {
      console.log(this.arreglo[i].fechaCreacion);
  }
  }

}
