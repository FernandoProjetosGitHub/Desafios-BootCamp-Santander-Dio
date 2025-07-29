// Cria um objeto chamado 'pokeApi' que servirá como "espaço" para armazenar funções relacionadas à API da PokéAPI
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;
    const stats = pokeDetail.stats.map((statsOfPokemon) => ({
        name: statsOfPokemon.stat.name,
        base: statsOfPokemon.base_stat
    }));
    pokemon.types = types;
    pokemon.type = type;
    pokemon.stats = stats
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    return pokemon
}


// Define uma função dentro do objeto pokeApi chamada 'getPokemonDetail'
// Essa função recebe como parâmetro um 'pokemon' (com nome e URL) e retorna uma Promise com os detalhes completos desse Pokémon
pokeApi.getPokemonDetail = (pokemon) => {
    
    // Faz uma requisição HTTP (fetch) para a URL específica do Pokémon, que vem de cada item da lista da API principal
    return fetch(pokemon.url)

        // Quando a resposta chegar, converte ela em JSON para poder acessar os dados como objeto JavaScript
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}


// Define uma nova função chamada 'getPokemons' também dentro do objeto pokeApi
// Essa função recebe dois parâmetros: offset (ponto de início da lista) e limit (quantos pokémons queremos buscar)
// Se não forem passados valores, offset será 0 e limit será 5 por padrão
pokeApi.getPokemons = (offset = 0, limit = 15) => {

    // Cria a URL da requisição combinando o offset e o limit com os parâmetros esperados pela PokéAPI
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    // Inicia a requisição HTTP para buscar a lista de pokémons com nome e URL
    return fetch(url)

        // Quando a resposta chegar, converte ela em JSON
        .then((response) => response.json())

        // A resposta JSON contém várias propriedades, mas aqui acessamos apenas o array 'results'
        // Esse array contém objetos com 'name' e 'url' para cada Pokémon da lista
        .then((jsonBody) => jsonBody.results)

        // Agora que temos o array de pokémons básicos (nome + url), usamos 'map' para transformar cada um deles
        // A função 'getPokemonDetail' será aplicada em cada Pokémon — o que gera um array de Promises
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

        // 'detailRequests' agora é um array de Promises (cada uma busca os detalhes de um Pokémon)
        // Promise.all espera TODAS essas Promises terminarem e retorna uma nova Promise com um array dos resultados completos
        .then((detailRequests) => Promise.all(detailRequests))

        // Aqui recebemos o array final 'pokemonsDetails' com todos os dados completos de cada Pokémon (id, name, types, sprites, etc)
        // Podemos agora devolver esses dados para uso em outra parte do código (como renderizar no HTML)
        .then((pokemonsDetails) => pokemonsDetails)
}

//     let podemonIndex = 1;

//     // Deverá exibir as características do pokemon na div 
// function showPokemonInPokedex () {

// }
//     // Modifica o valor de pokemon index baseado no botão apertado
//     // Cuidado com os limites.
//     // 1 <= x <= 151
// function findPokemonNumber(sum) {
//     if(sum) {

//     }
// }