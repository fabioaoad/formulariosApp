import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  //TRABAJO CON FORM GROUP
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre':       new FormControl('Geforce fx 5500'),
  //   'precio':       new FormControl(1500),
  //   'existencias':  new FormControl(50),
  // })

  // TRABAJO CON FORMBUILDER, SE INYECTO EL SERVICIO
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required,Validators.min(0)]],
    existencias: [, [Validators.required,Validators.min(0)]],
  })


  constructor( private fb: FormBuilder) { }
ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Geforce fx 5500',
      precio: 1500
    })
}

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
  }


  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
   console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
