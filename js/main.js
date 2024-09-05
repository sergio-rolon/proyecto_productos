let divData = document.getElementById("divData");

function getData() {
  const promesa = fetch("https://freetestapi.com/api/v1/products", {
    method: "GET",
  });
  promesa
    .then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          createCards(data);
        })
        .catch((error) => console.log("Problema con el json", error));
    })
    .catch((err) => console.log("Existió un problema con la solicitud", err));
} //getData()

function createCards(products) {
  console.log(products.length);

  products.forEach((producto) => {
    divData.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card m-1 " style="width: 24rem;">
        <img src="${producto.image}" class="card-img-top" alt="${producto.name}">
        <div class="card-body">
          <h5 class="card-title text-center">${producto.name}</h5>
          <p class="card-text text-center">${producto.description}</p>
          <ul class="list-group mb-2">
            <li class="list-group-item card-text">Precio: ${producto.price}</li>
            <li class="list-group-item card-text">Calificación: ${producto.rating}</li>
            <li class="list-group-item card-text">Marca: ${producto.brand}</li>
            <li class="list-group-item card-text">Color: ${producto.color}</li>
            <li class="list-group-item card-text">Conectividad: ${producto.connectivity}</li>
            <li class="list-group-item card-text">Inalámbrico: ${producto.wireless}</li>
          </ul>
          <div class="container text-center">
          <a href="#" class="btn btn-primary">Comprar</a>
          </div>
 
      </div>`
    );
  });
} // createCards
getData();
