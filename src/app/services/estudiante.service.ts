import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudiantesList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getEstudiantes() {
    return this.estudiantesList = this.firebase.list('alumnos');
  }
  saveEstudiante(estudiante: Estudiante) {
    this.estudiantesList.push({
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      direccion: estudiante.direccion,
      genero: estudiante.genero,
      fechaN: estudiante.fechaN,
      estado: estudiante.estado
    });
  }
  updateAlumno(estudiante: Estudiante) {
    this.estudiantesList.update(estudiante.$key, {
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      direccion: estudiante.direccion,
      genero: estudiante.genero,
      fechaN: estudiante.fechaN,
      estado: estudiante.estado
    });
  }
  deleteAlumno($key: string){
    this.estudiantesList.remove($key);
  }
}
