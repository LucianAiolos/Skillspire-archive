// let query = document.querySelector("#input-text").value

let previousSearchEl = document.querySelector("#previous-search");

let gifContainerEl = document.querySelector("#gif-container");



function getGif() {
    let inputVal = document.querySelector("#input-text").value;
    
    console.log(inputVal)


    localStorage.setItem("previousSearch", inputVal);


    let API_URL = "https://api.giphy.com/v1/gifs/search?api_key=rlGjlbEQibLMHv9podBx98qqxWvMQjFB&q=" + inputVal + "&limit=10&offset=0&rating=g&lang=en"


    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            // render previous search
            let prev = localStorage.getItem("previousSearch");

            let button = document.createElement("h3");
            
            button.innerHTML = `<a href="${API_URL}">${prev}</a>`
            
            previousSearchEl.appendChild(button)

            inputVal.value = "";


            // render gifs

          let gifs = data.data.map(gif => {

            let title = document.createElement("h4");
            let giphyImage = document.createElement("iframe");
            var src = gif.embed_url
            console.log(src)


            title.textContent = `${gif.title}`
            giphyImage.setAttribute('src', src);

            console.log(giphyImage)


            gifContainerEl.append(title)
            gifContainerEl.append(giphyImage)

          })


        })



}

