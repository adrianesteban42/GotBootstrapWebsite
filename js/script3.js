async function fetchData(url) {

    let response = await fetch(url)
  
    let data = await response.json()
  
    return data
}
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

fetchData("https://thronesapi.com/api/v2/Characters/"+characterId)
.then(json => {

    const div1 = document.createElement("div")

    div1.setAttribute("class", "div1 col-4")

    const div2 = document.createElement("div")

    div2.setAttribute("class", "card")
    div2.setAttribute("style", "width: 20rem;")

    const image = document.createElement("img")

    image.setAttribute("src" , json.imageUrl)
    image.setAttribute("class", "card-img-top")
    image.setAttribute("alt", "...")

    const div3 = document.createElement("div")

    div3.setAttribute("class", "card-body")

    const h5 = document.createElement("h5")

    h5.setAttribute("class", "card-title")
    h5.innerHTML = json.fullName;
    
    const p1 = document.createElement("p")

    p1.setAttribute("class", "card-text")
    p1.innerHTML = "Nombre: "+json.firstName;

    const p2 = document.createElement("p")

    p2.setAttribute("class", "card-text")
    p2.innerHTML = "Apellido: "+json.lastName;

    const p3 = document.createElement("p")

    p3.setAttribute("class", "card-text")
    p3.innerHTML = "Titulo: "+json.title;

    const p4 = document.createElement("p")

    p4.setAttribute("class", "card-text")
    p4.innerHTML = "familia: "+json.family;

    div3.appendChild(h5)
    div3.appendChild(p1)
    div3.appendChild(p2)
    div3.appendChild(p3)
    div3.appendChild(p4)
    div2.appendChild(image)
    div2.appendChild(div3)
    div1.appendChild(div2)

    const contenedor = document.getElementsByClassName("row")[0]
    contenedor.appendChild(div1)

    // const div = document.createElement("div")

    // div1.setAttribute("class", "div col-1")

    // const image = document.createElement("img")

    // image.setAttribute("src" , json.imageUrl)
    // image.setAttribute("class", "card-img-top")
    // image.setAttribute("alt", "...")

    // const h1 = document.createElement("h1")

    // h1.innerHTML = json.fullName;
    
    // const h3 = document.createElement("h3")

    // h3.innerHTML = "Titulo: "+json.title;

    // const h3_2 = document.createElement("h3")

    // h3_2.innerHTML = "familia: "+json.family;

    // const contenedor = document.getElementsByClassName("row")[0]
    // contenedor.appendChild(image)
    // contenedor.appendChild(h1)
    // contenedor.appendChild(h3)
    // contenedor.appendChild(h3_2)

})
.catch(error => console.log(error))