const image = document.getElementById("image");
const button = document.getElementById("button");
//API - https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

//API-KEY - WkwNlksSkmSgwp9x1LdqKrZvYTnc1tNgzXo0Umsg

const apiKey = "WkwNlksSkmSgwp9x1LdqKrZvYTnc1tNgzXo0Umsg"

async function getPhotos() {
    const count = 1;
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    image.setAttribute("src",data[0].url);
}


button.addEventListener("click", getPhotos)

//ONLoad

