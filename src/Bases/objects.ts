export const pokemonIds: number[] = [24,56,231,23]

pokemonIds.push(1,2,3,4,5)

pokemonIds.push( +'2')

interface Pokemon {
    id: number,
    name : String
    age? : number;
}

export const bulbasaur : Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age:3
}

export const charmander : Pokemon = {
    id : 2,
    name : 'Charmander',
    age: 1
}

export const pokemons:Pokemon[] = [];

pokemons.push(charmander)