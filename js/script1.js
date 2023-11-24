fetch("https://thronesapi.com/api/v2/Characters")
.then(response => response.json())
.then(json => {

    console.log(json)
    for (let i = 0; i<json.length; i++) {

        const div1 = document.createElement("div")

        div1.setAttribute("class", "div1 col-4")

        const div2 = document.createElement("div")

        div2.setAttribute("class", "card")
        div2.setAttribute("style", "width: 18rem;")

        const image = document.createElement("img")

        image.setAttribute("src" , json[i].imageUrl)
        image.setAttribute("class", "card-img-top")
        image.setAttribute("alt", "...")

        const div3 = document.createElement("div")

        div3.setAttribute("class", "card-body")

        const h5 = document.createElement("h5")

        h5.setAttribute("class", "card-title")
        h5.innerHTML = json[i].fullName;
        
        const p1 = document.createElement("p")

        p1.setAttribute("class", "card-text")
        p1.innerHTML = "Titulo: "+json[i].title;

        const p2 = document.createElement("p")

        p2.setAttribute("class", "card-text")
        p2.innerHTML = "familia: "+json[i].family;

        div3.appendChild(h5)
        div3.appendChild(p1)
        div3.appendChild(p2)
        div2.appendChild(image)
        div2.appendChild(div3)
        div1.appendChild(div2)

        const contenedor = document.getElementsByClassName("row")[0]
        contenedor.appendChild(div1)
    }
})
.catch(error => console.log(error))

/* 
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUlPwsl7IZOzDF0DrYTyJt21cXUjDzm4X7ZVpeHhzUcsj2ioq-" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Brienne de Tarth</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
 */