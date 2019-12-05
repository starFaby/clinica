import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
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
    doc.text('Reporte Mensual', 14, 15);
    doc.text('Reporte Mensual', 14, 18);
    const cuerpo = [];
    const col = ['fecha', 'cedula', 'descripcion'];
    this.arreglo.forEach(element => {
      const temp = [element.fechaCreacion, element.cedula, element.descripcion];
      cuerpo.push(temp);
    });
    doc.autoTable(col, cuerpo);
    doc.save('reporte mensual');
  }

}
