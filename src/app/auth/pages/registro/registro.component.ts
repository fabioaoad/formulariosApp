import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
// TODO: Temporal
  nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern        : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern( this.nombreApellidoPatter ) ] ],
    email: ['',[Validators.required, Validators.pattern( this.emailPattern ) ] ]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fabio Aoad',
      email : 'optimusprime@cybertron.com'
    });
  }


  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }

}
