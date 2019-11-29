import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { General } from '../models/general';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  generalList: AngularFireList<any>;
  selectedGeneral: General = new General();
  constructor(private firebase: AngularFireDatabase) { }
  getGenerals() {
    return this.generalList = this.firebase.list('general');
  }
  saveGeneral(general: General) {
    this.generalList.push({
      idEstudiante: general.idEstudiante,
      grupoSanguineo: general.grupoSanguineo,
      antecedentes: general.antecedentes,
      motivoConsulta: general.motivoConsulta,
      enfermedadActual: general.enfermedadActual,
      presion: general.presion,
      temperatura: general.temperatura,
      saturacionOxigeno: general.saturacionOxigeno,
      peso: general.peso,
      talla: general.talla,
      examenFisico: general.examenFisico,
      idCie10: general.idCie10,
      tratamiento: general.tratamiento,
      seguimiento: general.seguimiento,
      observaciones: general.observaciones,
      estado: general.estado
    });
  }
}
