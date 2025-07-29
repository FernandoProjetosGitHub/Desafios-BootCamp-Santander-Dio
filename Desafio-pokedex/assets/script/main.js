// Seleciona o elemento <ol> da página HTML com o id "pokemonList"
// É dentro desse elemento que os Pokémon serão adicionados dinamicamente
const pokemonList = document.querySelector('#pokemonList');
const loadMoreButton = document.querySelector('#loadMoreButton');
const limit = 30;
let offset = 0

const maxRecords = 151;



// Define uma função que recebe um objeto Pokémon (com dados como nome, tipos, imagem, etc)
// Essa função retorna uma string HTML que representa um <li> com as informações do Pokémon
function loadPokemonItems(offset, limit) {
    // Chama a função getPokemons da pokeApi para buscar os dados dos Pokémon
    // Quando a Promise for resolvida, recebemos o array 'pokemons'
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Usa 'map' para transformar cada objeto Pokémon em um item HTML <li> com a função convertPokemonToLi
        // Em seguida, usa 'join("")' para unir tudo em uma string só e adiciona no HTML da página
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span> 
            <span class="name">${pokemon.name}</span> 
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                
                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
            <div id="stats">
                <ol class="stats">
                    <p>Status</p>
                    ${pokemon.stats.map((stat) => `<li> ${stat.name} : ${stat.base}</li>`).join('')} 
                </ol> 
            </div>
        </li>
    `).join('');
        pokemonList.innerHTML += newHtml
    })
}
loadPokemonItems(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit;
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit =  maxRecords - offset
        loadPokemonItems(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
        loadPokemonItems(offset, limit);
    }
})



