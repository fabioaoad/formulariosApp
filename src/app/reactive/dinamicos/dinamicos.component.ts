import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   nombre: ''
    // })
  }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['Mario Bros', Validators.required],
      ['Colin MacRae', Validators.required],
    ], Validators.required )
  });


  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if( this.nuevoFavorito.invalid ){
      return;
    }

    //INSERTO CON EL FORM BUILDER fb - RECOMENDAMO PORQ ESTA INYECTADO COMO SERVICIO
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    // INSERTO CON EL FORM CONTROL
    //this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }

  borrar(index: number){
    this.favoritosArr.removeAt( index );
  }

  guardar(){
    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
   //this.miFormulario.reset();
  }



}
