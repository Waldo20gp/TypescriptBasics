class NewPokemon{
    constructor(
        public readonly id: number,
        public name:string
    ){}

    scream() {
        console.log(`${this.name.toUpperCase() } NO QUIERE HABLAR !!!`);
    }

    speak() {
        console.log(`${this.name}, no quiere hablar!`);
    }

}


const MyDecorator = () => {
    return (target:Function) => {
        return NewPokemon
    }
}

@MyDecorator()
export class Pokemon{

    constructor(
        public readonly id: number,
        public name:string
    ){}

    scream() {
        console.log(`${this.name.toUpperCase() } !!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }

}


export const charmander = new Pokemon(1, "Charmander")

console.log(charmander.speak());
console.log(charmander.scream());
