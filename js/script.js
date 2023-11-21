fetch("https://thronesapi.com/api/v2/Characters")
.then(response => response.json())
.then(json => {
    const image = document.createElement("img")
    image.setAttribute("src" , json[0].imageUrl)
    const contenedor = document.getElementsByClassName("container")[0]
    contenedor.appendChild(image)
})
.catch(error => console.log(error))

console.log("hola")