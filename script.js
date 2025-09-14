const obtenerValorBtn = () => {
    let inputBtn = document.getElementById("image-button");   
    let valorBtn =inputBtn.value;
    peticionApi(valorBtn);
}

const obtenerValorDate= () => {    
    let inputDate = document.getElementById("image-date");
    let valorDate =inputDate.value;
    peticionApi(valorDate);
}

const peticionApi = () => {
    const baseUrl = "https://api.nasa.gov/planetary/apod";
    const api_key = "CMh6ZT7c6r0UFW3uKLp3aAGrfbcw2NOiiC7Xdo0M";
    const endpoint = `?api_key=${api_key}`;
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err) );

}

const peticionApiRandom = () => {
    const baseUrl = "https://api.nasa.gov/planetary/apod";
    const api_key = "CMh6ZT7c6r0UFW3uKLp3aAGrfbcw2NOiiC7Xdo0M";
    const endpoint = `?api_key=${api_key}&count=1`;
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
    .then((res) => printData(res.data[0]))
    .catch((err) => console.log(err));
}

const printData = (data) => {
    let respuesta = document.getElementById("image-box");

    respuesta.innerHTML = `
        <h2>${data.title}  ${data.date}</h2>
        <h4>${data.copyright}</h4>
        <label>Descripcion:<h4>${data.explanation}</h4></label>
        <img src="${data.url}" id="image-nasa"/>   
        
        

    `;
}