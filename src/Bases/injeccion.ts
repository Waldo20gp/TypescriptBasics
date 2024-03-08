
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface'
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';


export class Pokemon{
    constructor(
        public readonly id:number,
        public name:string,
        private readonly http:HttpAdapter
    ){}
    
    scream() {
        console.log(`${this.name.toUpperCase() } !!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }


    async getMoves(): Promise<Move[]>{
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')

        console.log(data.moves.length);

        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();


export const charmander = new Pokemon(4,'Charmander', pokeApiAxios);


console.log(charmander.getMoves());