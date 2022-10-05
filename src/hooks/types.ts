export type PokemonOption = {
    id: string;
    name: string;
    number: string;
    image: string;
    types: string[];
};

export type Pokemon = {
    id: PokemonOption['id'];
    name: PokemonOption['name'];
    number: PokemonOption['number'];
    image: PokemonOption['image'];
    types: PokemonOption['types'];
};


type MinMax = {
    minimum: string;
    maximum: string;
}
export type PokemonDetailsOption = PokemonOption & {
    weight: MinMax;
    height: MinMax;
    classification: string;
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: string;
    maxHP: string;
};

export type PokemonDetails = Pokemon & {
    weight: PokemonDetailsOption['weight'];
    height: PokemonDetailsOption['height'];
    classification: PokemonDetailsOption['classification'];
    resistant: PokemonDetailsOption['resistant'];
    weaknesses: PokemonDetailsOption['weaknesses'];
    fleeRate: PokemonDetailsOption['fleeRate'];
    maxCP: PokemonDetailsOption['maxCP'];
    maxHP: PokemonDetailsOption['maxHP'];
};