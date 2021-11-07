import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  //TRABAJO CON FORM GROUP
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre':       new FormControl('Geforce fx 5500'),
  //   'precio':       new FormControl(1500),
  //   'existencias':  new FormControl(50),
  // })

  // TRABAJO CON FORMBUILDER, SE INYECTO EL SERVICIO
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    precio: [10, [Validators.required,Validators.min(0)]],
    existencias: [8, [Validators.required,Validators.min(0)]],
  })


  constructor( private fb: FormBuilder) { }


  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
  }

}
