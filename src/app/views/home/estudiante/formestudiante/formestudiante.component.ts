import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { EstudianteComponent } from '../estudiante.component';
import { Validatorsestudiante } from 'src/app/validators/validatorsestudiante';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formestudiante',
  templateUrl: './formestudiante.component.html',
  styleUrls: ['./formestudiante.component.css']
})
export class FormestudianteComponent implements OnInit {
  arrayDate: [];
  myDate: Date;
  constructor(private estudianteService: EstudianteService, private matDialogRef: MatDialogRef<EstudianteComponent>,
              private dialog: MatDialog,
              private validatorsestudiante: Validatorsestudiante) { }
  form = this.validatorsestudiante.form;
  formatDate(e) {
    const convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.form.get('fechaN').setValue(convertDate, {
      onlyself: true
    });
  }


  ngOnInit() {

  }
  onReset() {
    this.validatorsestudiante.form.reset();
    this.validatorsestudiante.initializeFomrGroup();
  }
  onSubmit() {
    if (this.validatorsestudiante.form.valid) {
      if (this.validatorsestudiante.form.get('$key').value == null) {
        console.log(this.validatorsestudiante.form.value);
        this.estudianteService.saveEstudiante(this.validatorsestudiante.form.value);
        this.validatorsestudiante.form.reset();
        this.validatorsestudiante.initializeFomrGroup();
        this.onClose();
      } else {
        this.estudianteService.updateAlumno(this.validatorsestudiante.form.value);
        this.validatorsestudiante.form.reset();
        this.validatorsestudiante.initializeFomrGroup();
        this.onClose();
      }
    }
  }
  onClose() {
    this.validatorsestudiante.form.reset();
    this.validatorsestudiante.initializeFomrGroup();
    this.matDialogRef.close();
  }
  onEdit(row) {
    this.validatorsestudiante.form.setValue(row);
    const matDialogRef = new MatDialogConfig();
    matDialogRef.disableClose = true;
    matDialogRef.autoFocus = true;
    matDialogRef.width = '60px';
    this.dialog.open(FormestudianteComponent, matDialogRef);
  }
  formatDate1(date) {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

  /*  if (month.length < 2) {
         const month1 = '0' + month;
    }
    if (day.length < 2) {
      const day1 = '0' + day;
    }*/

    return [year, month, day].join('/');
  }
}
