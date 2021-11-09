import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailPattern, nombreApellidoPatter, noPuedeStrider} from "../../../shared/validator/validaciones";
import {ValidatorService} from "../../../shared/validator/validator.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

    miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern( this.validatorService.nombreApellidoPatter ) ] ],
    email: ['',[Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    username: ['',[Validators.required, this.validatorService.noPuedeStrider ]  ]
  })

  constructor( private fb: FormBuilder,
               private  validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  : 'Fabio Aoad',
      email   : 'optimusprime@cybertron.com',
      username: 'bumblebee_autobot'
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
