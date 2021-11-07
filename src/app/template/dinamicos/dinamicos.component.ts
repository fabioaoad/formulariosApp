import { Component } from '@angular/core';


interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{


  nuevoJuego: string = '';

  persona: Persona ={
    nombre: 'Fabio',
    favoritos: [
      { id: 1, nombre: 'Mario Bros'},
      { id: 2, nombre: 'Call of Duty'},
      { id: 3, nombre: 'Grand Theft Auto'},
      { id: 4, nombre: 'Colin McRae'},
      { id: 4, nombre: 'Assassin\'s Creed'}
    ]
  }


  guardar(){
    console.log('Formulario posteado');
  }


  eliminar(index: number){
  this.persona.favoritos.splice(index,1);
  }


  agregarJuego(){
    const nuevoFavorito:  Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push( { ...nuevoFavorito } );
    this.nuevoJuego = '';
  }
}
