const showContainerEl = document.getElementById('show-container')

let input = ''

// const POKE_URL = `https://pokeapi.co/api/v2/pokemon/${input}`

const fetchPokeData = async (input) => {
  // console.log(url)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
  const data = await res.json()
  console.log( data.abilities[0].ability.name)
    // console.log(data)
    // .then(data = res)
  // console.log(data)

  let name = data.name
  let ability = data.abilities[0].ability.name

  const nameEl = document.createElement('h3')
  nameEl.innerHTML = name
  const abilityEl = document.createElement('h4')
  abilityEl.innerHTML = ability

  showContainerEl.appendChild(nameEl)
  showContainerEl.appendChild(abilityEl)
}



const inputEl = document.getElementById('input-text').addEventListener('input', (e)=> {
  input = e.target.value
})

const searchBtn = document.getElementById('search-btn').addEventListener('click', ()=> {
  fetchPokeData(input)
})