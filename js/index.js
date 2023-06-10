var requestOptions = {
  method: "GET",
  redirect: "follow",
};

let dataApi = document.getElementById("data_api");

const BASE_URL = "https://rickandmortyapi.com/api";

let previus = document.getElementById('previous');
let next = document.getElementById('next');

getDataApi(BASE_URL + "/character");

function getDataApi(baseUrl) {
  fetch(baseUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      previous.setAttribute("title", data.info.prev);  
      next.setAttribute("title", data.info.next);
      
      for (let result of data.results) {
        dataApi.innerHTML += ` <div class="card" style="width: 18rem">
                <img src="${result.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${result.name}</h5>
                  <p class="card-text">                                                  
                    <a href="https://rickandmortyapi.com/api/character/episode">Episodios</a>                                                             
                  </p>
                  <a href="#" class="btn btn-primary" 
                  onclick="showMore('${result.name}', '${result.image}',  '${result.species}',
                  '${result.status}', '${result.gender}', '${result.origin.name}')">Mostrar Mas . . .</a>
                </div>
              </div> `;
      }
    })
    .catch((error) => console.log("error", error));
}

function showMore(name, image, species, status, gender, origin) {
  Swal.fire({
    title: name,
    html: `<p class="card-text"><b>Especie: </b>${species}</p>
              <p class="card-text"><b>Estado: </b>${status}</p>
              <p class="card-text"><b>Genero: </b>${gender}</p>      
              <p class="card-text"><b>Origen </b>${origin}</p>`,
    imageUrl: image,
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "Custom image",
  });
}

function update(btn )   {
  if (eval (btn + ".title !== 'null' " )){
      dataApi.innerHTML = " ";
    
      eval("getDataApi(" + btn + ".title ); ");
}
}