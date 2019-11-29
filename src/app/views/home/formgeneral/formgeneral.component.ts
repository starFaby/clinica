import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Cie10 } from 'src/app/models/cie10';
import { Cie10Service } from 'src/app/services/cie10.service';
import { General } from 'src/app/models/general';
import { GeneralService } from 'src/app/services/general.service';
import { Validatorsgeneral } from 'src/app/validators/validatorsgeneral';
import { EstudianteComponent } from '../estudiante/estudiante.component';

@Component({
  selector: 'app-formgeneral',
  templateUrl: './formgeneral.component.html',
  styleUrls: ['./formgeneral.component.css']
})
export class FormgeneralComponent implements OnInit {
  private contador = 0;
  private encontrado = false;
  arregloEstudiante: Estudiante[];
  cie10Selected: Cie10[];
  cedulaBuscar: any = {
    cedula: ''
  };
  person: any = {
    idEstudiante: '',
    nombre: '',
    apellido: '',
    direccion: '',
    genero: '',
    fechaN: '',
    estado: ''
  };
  /***************************************************/
  /***************************************************/
  cie10Buscar: any = {
    codigo: ''
  };
  cie10: any = {
    idCie10: '',
    descripcion: ''
  };
  /***************************************************/
  /***************************************************/

  constructor(private estudianteService: EstudianteService,
              private cie10Service: Cie10Service,
              private generalService: GeneralService,
              private validatorsgeneral: Validatorsgeneral) { }
  form = this.validatorsgeneral.form;
  ngOnInit() {
    this.getEstudiantes();
    this.getCie10();
    this.getGeneral();
  }

  getGeneral() {
    this.generalService.getGenerals();
  }
  onKey(event) {
    this.contador = event.target.value.length;
    if (this.contador !== 10) {
      console.log('Cedula Invalida');
    } else {
      console.log('Cedula valida');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.arregloEstudiante.length; i++) {
        if (this.arregloEstudiante[i].cedula === this.cedulaBuscar.cedula) {
          this.encontrado = true;
          this.person.idEstudiante = this.arregloEstudiante[i].$key;
          this.person.nombre = this.arregloEstudiante[i].nombre;
          this.person.apellido = this.arregloEstudiante[i].apellido;
          this.person.direccion = this.arregloEstudiante[i].direccion;
          this.person.genero = this.arregloEstudiante[i].genero;
          this.person.fechaN = this.arregloEstudiante[i].fechaN;
          this.person.estado = this.arregloEstudiante[i].estado;
          console.log(this.arregloEstudiante[i].cedula);
          break;
        }
        if (this.arregloEstudiante[i].cedula !== this.cedulaBuscar.cedula) {
          this.encontrado = false;
          continue;
        }
      }
      if (this.encontrado === true) {
        console.log('encontrado');
      }
      if (this.encontrado === false) {
        console.log('Estudiante no Registrado');
      }
    }

  }


  getEstudiantes() {
    this.estudianteService.getEstudiantes().snapshotChanges().subscribe(
      list => {
        this.arregloEstudiante = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onKey1(event) {
    this.contador = event.target.value.length;
    if (this.contador !== 3) {
      console.log('codigo Invalido');
    } else {
      console.log('CodigoEncontrado');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.cie10Selected.length; i++) {
        if (this.cie10Selected[i].codigo === this.cie10Buscar.cie10) {
          this.encontrado = true;
          this.cie10.idCie10 = this.cie10Selected[i].$key;
          this.cie10.codigo = this.cie10Selected[i].codigo;
          this.cie10.descripcion = this.cie10Selected[i].descripcion;
          break;
        }
      }
    }
    if (this.encontrado === true) {
      console.log('encontrado');
    }
    if (this.encontrado === false) {
      console.log('Cie Registrado');
    }
  }


  getCie10() {
    this.cie10Service.getCie10().snapshotChanges().subscribe(item => {
      this.cie10Selected = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.cie10Selected.push(x as Cie10);
      });
    });
  }
  /******************Guardar formulario General********************** */
  /***************************************************************** */
  onSubmit(formGeneral: NgForm) {
    // this.generalService.saveGeneral(formGeneral.value);
    // this.resetForm(formGeneral);
  }
  resetForm(formGeneral?: NgForm) {
    if (formGeneral != null) {
      formGeneral.reset();
      this.generalService.selectedGeneral = new General();
    }
  }
}
