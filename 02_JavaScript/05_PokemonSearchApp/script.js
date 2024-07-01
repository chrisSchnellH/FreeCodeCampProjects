const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const img = document.getElementById('img')
const types = document.getElementById('types')

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

searchBtn.addEventListener('click', () => {
    const Url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase().trim()}`
    console.log(searchInput.value);
    console.log(Url);

    fetch(Url)
        .then(response => {
            if (!response.ok) {
                alert("Pokémon not found");
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then(data => {
            console.log(`Das ist Data: ${data}`)
            console.log(`Das ist Data.name: ${data.name}`)

            pokemonName.textContent = `${data.name}`;
            pokemonId.textContent = ` #${data.id}`;
            weight.textContent = `Weight: ${data.weight}`;
            height.textContent = `Height: ${data.height}`;

            img.innerHTML = '';
            for (const [key, value] of Object.entries(data.sprites)) {
                if (key === 'front_default' || key === 'front_shiny') {
                    img.innerHTML += `<img src="${value}" alt="${key}" id="sprite">`;
                }
            }

            types.innerHTML = '';
            data.types.forEach(type => {
                types.innerHTML += ` <span id="type-${type.type.name}">${type.type.name} </span>`
                console.log(type.type.name === 'grass')
            })

            hp.textContent = data.stats[0].base_stat;
            attack.textContent = data.stats[1].base_stat;
            defense.textContent = data.stats[2].base_stat;
            specialAttack.textContent = data.stats[3].base_stat;
            specialDefense.textContent = data.stats[4].base_stat;
            speed.textContent = data.stats[5].base_stat;

        })
        .catch(error => {
            console.error('Fetch Error', error);
        });
})
