import { FormControl } from '@angular/forms';


export const nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern        : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



export const noPuedeStrider = ( control: FormControl ) => {
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



