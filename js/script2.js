async function fetchData(url) {

    let response = await fetch(url)
  
    let data = await response.json()
  
    return data
}

fetchData("https://thronesapi.com/api/v2/Continents")
.then(json => {

    console.log(json)
    for (let i = 0; i<json.length; i++) {

        const contenedor = document.getElementsByClassName("row")[0]

        contenedor.innerHTML += "<div class='div1 col-4'>"+
        "<div class='card-body' style='width: 18rem'>"+
        "<h5 class='card-title'>"+json[i].name+"</h5>"+
        "</div>"+
        "</div>"
    }
})
.catch(error => console.log(error))

/* 
    <div class="col-4">
        <div class="card-body" style="width: 18rem;">
            <h5 class="card-title">Brienne de Tarth</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
 */