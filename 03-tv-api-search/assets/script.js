let showContainerEl = document.querySelector("#show-container");
let searchBtn = document.getElementById('search-button').addEventListener('click', ()=> getShows(input))

let inputEl = document.getElementById('input-text').addEventListener('input', (e)=> updateInput(e))

let input = ''

const updateInput = (e) => {
  e.preventDefault()
  // console.log(e.target.value)
  input = e.target.value
  console.log(input, 'input')
}

function getShows(inut){
  console.log('clicked')

    // 1. use querySelector to 'grab' your search element. Set it equal to a variable named inputValue.
    // don't forget to use the value method to access what the user types

    // 2. Alter the url by subsituting the variable that you created in step two with the word girls

    let API_URL = `https://api.tvmaze.com/search/shows?q=${input}`


    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
    
          console.log(data);

          let shows = data.map(show => {

            let showTitle = document.createElement("h3");
            let showPoster = document.createElement("img")
              
            showTitle.textContent = show.show.name
            showPoster.setAttribute("src", show.show.image.medium )


            showContainerEl.appendChild(showTitle)
            showContainerEl.appendChild(showPoster)


            console.log(showTitle);

            

          })


        })

  


    }



// 3. Don't forget to delete this function and add a click handler in your html in the button element
// getShows()

