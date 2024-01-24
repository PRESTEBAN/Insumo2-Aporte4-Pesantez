import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api: APIServiceService) {}

  searchQuery: string = '';
  cardTitle: string = 'Pokemon Card';
  pokemonImage: string = '';
  loading: boolean = false;


  numberValue: number = 0; // Valor inicial

  // Función para incrementar el número
  increment() {
    if (this.numberValue < 100) {
      this.numberValue += 1;
    }
  }

  // Función para decrementar el número
  decrement() {
    if (this.numberValue > 0) {
      this.numberValue -= 1;
    }
  }

  getPokemonDataID(id: number) {
    try {
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        const pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(pokemon);
  
        // Actualiza la variable cardTitle con el nombre del Pokémon.
        this.cardTitle = pokemon;
  
        // Actualiza la variable pokemonImage con la URL de la imagen del Pokémon.
        this.pokemonImage = response.sprites.front_default;
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  search() {
    // Llama a la función getPokemonDataID con el valor actual de numberValue
    this.getPokemonDataID(this.numberValue);
  }

  // Funciones para incrementar y decrementar (puedes ajustar según tus necesidades)

}
