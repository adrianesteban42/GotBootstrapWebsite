async function fetchData(url) {

  let response = await fetch(url)

  let data = await response.json()

  return data
}

$(document).ready(function(){
  $('#myTable').dataTable();
});

fetchData("https://thronesapi.com/api/v2/Characters")
.then(json => {

    console.log(json)
    for (let i = 0; i<json.length; i++) {

        const a = document.createElement("a")
        
        a.setAttribute("href", `detalles.html?id=${json[i].id}`);
        a.setAttribute("class", "character-link");

        const tbody = document.createElement("tbody")

        const tr = document.createElement("tr")

        const td1 = document.createElement("td")

        td1.innerHTML = json[i].fullName;

        const td2 = document.createElement("td")

        const image = document.createElement("img")

        image.setAttribute("src" , json[i].imageUrl)
        image.setAttribute("class", "card-img-top")
        image.setAttribute("alt", "...") 

        tr.appendChild(td1)
        a.appendChild(image)
        td2.appendChild(a)
        tr.appendChild(td2)
        tbody.appendChild(tr)

        const contenedor = document.getElementsByClassName("table")[0]
        contenedor.appendChild(tbody)

        
    }
})
.catch(error => console.log(error))

