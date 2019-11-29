import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class Validatorsgeneral {
    form = new FormGroup({
        $key: new FormControl(null),
        idEstudiante: new FormControl('', Validators.required),
        grupoSanguineo: new FormControl('', Validators.required)

      });

      formControls = this.form.controls;

      initializeFomrGroup() {
        this.form.setValue({
          $key: null,
          idEstudiante: '',
          grupoSanguineo: ''
        });
      }
}
