import { Injectable } from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern        : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeStrider( control: FormControl ): ValidationErrors | null{
  // console.log(control.value);
  const valor: string = control.value?.trim().toLowerCase();
  //console.log(valor);
  if( valor === 'strider' ){
    //return ERROR
    return {
      noStrider: true
    }
  }
  return null;
}

}
