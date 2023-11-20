const colorsTypePokemon = {
    fire: '#f05030',
    grass: '#B6E2D2',
    electric: '#f8d030',
    water: '#6890f0',
    ground: '#e0c068',
    rock: '#b8a038',
    fairy: '#b8b8d0',
    poison: '#a040a0',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#a890f0',
    fighting: '#E6E0D4',
    normal: '#909090'
}

const colorsTypePokemonDetails = {
    fire: '#B53218',
    grass: '#62CBA5',
    electric: '#FBE27E',
    water: '#1E5FFA',
    ground: '#F5C02E',
    rock: '#9E8E49',
    fairy: '#4C4CEA',
    poison: '#610D61',
    bug: '#FDA01A',
    dragon: '#407FF1',
    psychic: '#EFF62F',
    flying: '#6233ED',
    fighting: '#FFD071',
    normal: '#D1D0CE'
}


function searchPokemon() {
    function searchPokemonClick() {
        document.querySelector(".button-search").addEventListener('click', () => {
            const searchInput = document.querySelector("#search-input").value
            const areaCardsPokemon = document.querySelector(".cards")

            const pokeApi = `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`


            fetch(pokeApi)
                .then(respost => respost.json())
                .then(pokemon => {
                    areaCardsPokemon.innerHTML = ""

                    const cardPokemon = document.createElement("div")

                    cardPokemon.classList.add("card")

                    cardPokemon.tabIndex = 0

                    const types = pokemon.types.map(type => type.type.name);

                    const typeElements = types.map(type => `<div class="type"><p>${type}</p></div>`).join("")

                    getColors(types, cardPokemon)

                    cardPokemon.innerHTML = `<div class="text-card">
                <h1 tabindex="0">${pokemon.name}</h1>
    
                <div class="type-card" tabindex="0">
                    ${typeElements}
                </div>
    
                <div class="text-click">
                    <p tabindex="0">More</p>
                </div>
    
                </div>
    
                <div class="image-card">
                    <img src="${pokemon.sprites.front_default}" alt="Imagem do: ${pokemon.name}" tabindex="0">
    </div>`

                    areaCardsPokemon.appendChild(cardPokemon)

                    logoReloadPag()

                    cardPokemon.addEventListener('click', () => detailsPokemon(pokemon))
                    cardPokemon.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter') {
                            detailsPokemon(pokemon);
                        }
                    });
                })
                .catch(error => {
                    alert("Pokemon Não Encontrado!")
                    location.reload()
                })
        })
    }
    function searchPokemonEnter() {
        document.querySelector(".button-search").addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                const searchInput = document.querySelector("#search-input").value
                const areaCardsPokemon = document.querySelector(".cards")

                const pokeApi = `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`


                fetch(pokeApi)
                    .then(respost => respost.json())
                    .then(pokemon => {
                        areaCardsPokemon.innerHTML = ""

                        const cardPokemon = document.createElement("div")

                        cardPokemon.classList.add("card")

                        cardPokemon.tabIndex = 0

                        const types = pokemon.types.map(type => type.type.name);

                        const typeElements = types.map(type => `<div class="type"><p>${type}</p></div>`).join("")

                        getColors(types, cardPokemon)

                        cardPokemon.innerHTML = `<div class="text-card">
                <h1 tabindex="0">${pokemon.name}</h1>
    
                <div class="type-card" tabindex="0">
                    ${typeElements}
                </div>
    
                <div class="text-click">
                    <p tabindex="0">More</p>
                </div>
    
                </div>
    
                <div class="image-card">
                    <img src="${pokemon.sprites.front_default}" alt="Imagem do: ${pokemon.name}" tabindex="0">
                </div>`

                        areaCardsPokemon.appendChild(cardPokemon)

                        logoReloadPag()

                        cardPokemon.addEventListener('click', () => detailsPokemon(pokemon))
                        cardPokemon.addEventListener('keydown', (event) => {
                            if (event.key === 'Enter') {
                                detailsPokemon(pokemon);
                            }
                        });
                    })
                    .catch(error => {
                        alert("Pokemon Não Encontrado!")
                        location.reload()
                    })
            }
        })
    }
    searchPokemonClick()
    searchPokemonEnter()
}

function randomPokemonsHome() {
    const areaCardsPokemon = document.querySelector(".cards")

    for (let i = 1; i <= 100; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(respost => respost.json())
            .then(pokemon => {
                const cardPokemon = document.createElement("div")

                cardPokemon.classList.add("card")

                cardPokemon.tabIndex = 0

                const types = pokemon.types.map(type => type.type.name);

                const typeElements = types.map(type => `<div class="type" tabindex="0"><p>${type}</p></div>`).join("")

                getColors(types, cardPokemon)

                cardPokemon.innerHTML = `<div class="text-card">
            <h1 tabindex="0">${pokemon.name}</h1>

            <div class="type-card">
                ${typeElements}
            </div>

            <div class="text-click" tabindex="0">
                <p>More</p>
            </div>

            </div>

            <div class="image-card" tabindex="0">
                <img src="${pokemon.sprites.front_default}" alt="Imagem do: ${pokemon.name}">
            </div>`

                cardPokemon.addEventListener('click', () => detailsPokemon(pokemon))
                cardPokemon.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        detailsPokemon(pokemon);
                    }
                });


                areaCardsPokemon.appendChild(cardPokemon)

                logoReloadPag()
            })
    }
}

function getColors(types, cardPokemon) {
    if (types.includes("fire")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.fire;
    } else if (types.includes("grass")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.grass;
    } else if (types.includes("electric")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.electric;
    } else if (types.includes("water")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.water;
    } else if (types.includes("ground")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.ground;
    } else if (types.includes("rock")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.rock;
    } else if (types.includes("fairy")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.fairy;
    } else if (types.includes("poison")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.poison;
    } else if (types.includes("bug")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.bug;
    } else if (types.includes("dragon")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.dragon;
    } else if (types.includes("psychic")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.psychic;
    } else if (types.includes("flying")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.flying;
    } else if (types.includes("fighting")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.fighting;
    } else if (types.includes("normal")) {
        cardPokemon.style.backgroundColor = colorsTypePokemon.normal;
    }
}

function logoReloadPag() {
    const imageLogoHeader = document.querySelector("#image-logo")
    imageLogoHeader.addEventListener('click', () => location.reload())
}

function detailsPokemon(pokemon) {
    const imagemPokemon = document.querySelector('.imagem-pokemon')
    const nomePokemon = document.querySelector('.name-pokemon')
    const heightPokemon = document.querySelector('.height-p')
    const typePoke = document.querySelector('.type-p')
    const abilitiesPokemon = document.querySelector('.abilities-text')
    const defensePokemon = document.querySelector('.defense-text')
    const attackPokemon = document.querySelector('.attack-text')
    const spPokemon = document.querySelector('.sp-text')
    const dfPokemon = document.querySelector('.df-text')
    const sideTextCard = document.querySelector('.content-text')
    const sideImageCard = document.querySelector('.image')




    imagemPokemon.src = pokemon.sprites.front_default;
    imagemPokemon.alt = `Imagem do: ${pokemon.name}`
    nomePokemon.textContent = `${pokemon.name}`;
    heightPokemon.textContent = `${pokemon.height}`;
    typePoke.textContent = ` ${pokemon.types.map(type => type.type.name).join(", ")}`;
    abilitiesPokemon.textContent = `${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`;
    defensePokemon.textContent = `${pokemon.stats[3].base_stat}`;
    attackPokemon.textContent = `${pokemon.stats[4].base_stat}`;
    spPokemon.textContent = `${pokemon.stats[2].base_stat}`;
    dfPokemon.textContent = `${pokemon.stats[1].base_stat}`;

    if (typePoke.textContent.trim() === "fire") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.fire
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.fire
    } else if (typePoke.textContent.trim() === "fire, flying") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.fire
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.fire
    } else if (typePoke.textContent.trim() === "grass") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.grass
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.grass
    } else if (typePoke.textContent.trim() === "electric") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.electric
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.electric
    } else if (typePoke.textContent.trim() === "water") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.water
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.water
    } else if (typePoke.textContent.trim() === "water, fighting") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.water
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.water
    } else if (typePoke.textContent.trim() === "ground") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.ground
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.ground
    } else if (typePoke.textContent.trim() === "rock") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.rock
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.rock
    } else if (typePoke.textContent.trim() === "fairy") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.fairy
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.fairy
    } else if (typePoke.textContent.trim() === "poison") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.poison
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.poison
    } else if (typePoke.textContent.trim() === "poison, flying") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.poison
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.poison
    } else if (typePoke.textContent.trim() === "bug") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.bug
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.bug
    } else if (typePoke.textContent.trim() === "dragon") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.dragon
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.dragon
    } else if (typePoke.textContent.trim() === "psychic") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.psychic
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.psychic
    } else if (typePoke.textContent.trim() === "flying") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.flying
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.flying
    } else if (typePoke.textContent.trim() === "fighting") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.fighting
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.fighting
    } else if (typePoke.textContent.trim() === "normal") {
        sideTextCard.style.backgroundColor = colorsTypePokemon.normal
        sideImageCard.style.backgroundColor = colorsTypePokemonDetails.normal
    }

    document.querySelector("#icon-exit").addEventListener('click', () => {
        document.querySelector('.details-poke').style.display = 'none';
    })

    document.querySelector("#icon-exit").addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            document.querySelector('.details-poke').style.display = 'none';
        }
    })

    document.querySelector('.details-poke').style.display = 'flex';
}


randomPokemonsHome()
searchPokemon()